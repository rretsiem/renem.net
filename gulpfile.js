var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpUtil = require('gulp-util');

var cp = require('child_process');
var BrowserSync = require('browser-sync');

var responsive = require('gulp-responsive');
var imagemin = require('gulp-imagemin');
// var mozjpeg = require('imagemin-mozjpeg');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var newer = require('gulp-newer');
var jpegtran = require('imagemin-jpegtran');
var svgSprite = require('gulp-svg-sprite');
var htmlmin = require('gulp-htmlmin');
var swPrecache = require('sw-precache');
var exec = require('child_process').execSync;
var path = require('path');
var runSequence = require('run-sequence');
var del = require('del');
var request = require('request');
var httppost = require('gulp-post');
var minify = require('gulp-minify');

const size = require('gulp-size');

const browserSync = BrowserSync.create();
const hugoBin = "hugo";
// const defaultArgs = ["-d", "../dist", "-s", "site", "-v"];
const defaultArgs = ["-v"];

var DEV_DIR = './src';
var DIST_DIR = './public';

var globs = {
  css: [
    './src/css/normalize.css',
    './src/css/main.css',
  ]
};

gulp.task("hugo", (cb) => buildSite(cb));

gulp.task("build", ["css", "compress", "hugo", "img:build", "svg", "generate-service-worker"]);

gulp.task('compress', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./static/js'))
});

gulp.task("img", () =>
  gulp.src("./src/images/*.{jpg,png}")
    .pipe(responsive({
      "*": [
      {
        width: 480,
        rename: {suffix: "-sm"},
      }, {
        width: 480 * 2,
        rename: {suffix: "-sm@2x"},
      }, {
        width: 675,
      }, {
        width: 675 * 2,
        rename: {suffix: "@2x"},
      }],
    }, {
      silent: true,      // Don't spam the console
      withoutEnlargement: false,
    }))
    .pipe(gulp.dest("./static/images")
));

gulp.task("img:build", ["img"], () =>
  gulp.src(["./static/images/*.{jpg,png,gif,svg}"])
    .pipe(newer("./static/images"))
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo(),
      imagemin.jpegtran({progressive: true}),
    ]))
    .pipe(gulp.dest("./static/images"))
);

gulp.task('css', function () {
    var plugins = [
        // autoprefixer({browsers: ['last 1 version']}),
        // cssnext({browsers: ['last 1 version']}),
        // cssnano()
        require("postcss-cssnext")(),
        require("cssnano")({ autoprefixer: false }),
        // require("postcss-browser-reporter")()
    ];
    return gulp.src(globs.css)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.css'))
        .pipe(postcss(plugins))
        .pipe(size())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css'));
});

gulp.task("svg", () =>
  gulp.src("src/svg/*.svg")
    .pipe(svgSprite({
      mode: {
        inline: true,
        symbol: true
      },
      svg: {
        xmlDeclaration: false,
      }
    }))
    .pipe(gulp.dest("./layouts/partials"))
);

gulp.task("server", ["compress", "hugo", "css", "img"], () => {
  browserSync.init({
    server: {
      baseDir: DIST_DIR
    }
  });
  gulp.watch("./src/css/**/*.css", ["css", "hugo"]);
  gulp.watch("./src/js/**/*.js", ["compress", "hugo"]);
//  gulp.watch("./src/scss/**/*.scss", ["css"]);
  gulp.watch("./config.toml", ["hugo"]);
  gulp.watch("./content/**/*", ["hugo"]);
  gulp.watch("./layouts/**/*", ["hugo"]);
  gulp.watch("./static/**/*", ["hugo"]);
});

gulp.task('clean', function() {
  del.sync([DIST_DIR]);
});

gulp.task('superfeedr', function() {
  request.post(
    'http://renem.superfeedr.com/',
    { json: {
      "hub.mode": "publish",
      "hub.url": "https://renem.net/index.xml"
      }
    },
    function (error, response, body) {
        if (!error && response.statusCode == 204) {
          gulpUtil.log("pinged Superfeedr");
          //  gulpUtil.log(body);
        }
    }
  );
});

gulp.task('sitemap', function() {
//http://www.google.com/webmasters/sitemaps/ping?sitemap=https://renem.net/sitemap.xml
  request.get(
    'http://www.google.com/webmasters/sitemaps/ping?sitemap=https://renem.net/sitemap.xml',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
          gulpUtil.log("pinged Google Sitemap");
          //  gulpUtil.log(body);
        }
    }
  );
});


gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    /** This is the place where you could change / make the patterns on which files should be going into precache **/
    // staticFileGlobs: [rootDir + '/**/*.{js,html,css,svg}'],
    staticFileGlobs: [rootDir + '/**/*.{html,css,svg}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('deploy:firebase', function() {
  var result = exec("firebase deploy", {encoding: 'utf-8'});
    return result;
});

gulp.task('deploy:prod', function(callback) {
  runSequence('clean',
              'build',
              'generate-service-worker',
              'deploy:firebase',
              callback);
});

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;
  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}

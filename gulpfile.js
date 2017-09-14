var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpUtil = require('gulp-util');

var cp = require('child_process');
var BrowserSync = require('browser-sync');

var responsive = require('gulp-responsive');
var imagemin = require('gulp-imagemin');
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
var cache = require('gulp-cache');
var pngquant = require('imagemin-pngquant');

const size = require('gulp-size');

const browserSync = BrowserSync.create();
const hugoBin = "hugo";
// const defaultArgs = ["-d", "../dist", "-s", "site", "-v"];
const defaultArgs = ["-v"];

const argv = require('yargs').boolean('p').argv;

var DEV_DIR = './src';
var DIST_DIR = './public';
var devHost = 'http://localhost';
var devPort = '3000';

var globs = {
  css: [
    './src/css/normalize.css',
    './src/css/main.css',
  ]
};

/**
 * Production Mode
 * if set, the site will be rendered without drafts and with the production URL set in `config.toml`
 * @type {Boolean}
 */
const isProduction = argv.p;

if (isProduction) {
  gulpUtil.log(gulpUtil.colors.bold.red('🚚  Production Mode'));
} else {
  gulpUtil.log(gulpUtil.colors.bold.green('🔧  Development Mode'));
}

/**
 * DevMode Config
 * @type {String}
 */
const devOpts = !isProduction ? ['--buildDrafts --baseURL '+ devHost +':' + devPort + '/'] : '';

// gulp.task("hugo", (cb) => buildSite(cb, devOpts));
gulp.task("build", ["css", "compress", "svg", "img:build", "hugo:build", "generate-service-worker"]);

gulp.task("build:netlify", ["hugo:build", "generate-service-worker", "superfeedr"]);

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
    // .pipe(newer("./static/images"))
    .pipe(cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    // .pipe(imagemin([
    //  imagemin.gifsicle(),
    //  imagemin.optipng(),
    //  imagemin.svgo(),
    //  imagemin.jpegtran({progressive: true}),
    // ]))
    // .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest("./static/images"))
);

gulp.task('css', function () {
    var plugins = [
        require("postcss-cssnext")(),
        require("cssnano")({ autoprefixer: false }),
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

gulp.task("server", ["compress", "css", "img", "hugo:build"], () => {
  browserSync.init({
    server: {
      baseDir: DIST_DIR
    }
  });
  gulp.watch("./src/css/**/*.css", ["css", "hugo:build"]);
  gulp.watch("./src/js/**/*.js", ["compress", "hugo:build"]);
  gulp.watch("./src/images/**", ["img", "hugo:build"]);
  gulp.watch("./src/svg/**/*.svg", ["svg", "hugo:build"]);
  gulp.watch("./config.toml", ["hugo:build"]);
  gulp.watch("./content/**/*", ["hugo:build"]);
  gulp.watch("./layouts/**/*", ["hugo:build"]);
  gulp.watch("./static/**/*", ["hugo:build"]);
});

gulp.task('clean', function(done) {
  del.sync([DIST_DIR]);
  // cache.clearAll(done);
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

/**
 * Command that will be executed by `exec()`
 * @type {String}
 */
const command = `hugo -v ${devOpts}`;

gulp.task('hugo:build', done =>
  exec(command, (err, stdout) => {
    if (err) {
      gulpUtil.log(gulpUtil.colors.red(err));
      browserSync.notify("Hugo build failed :(");
    } else {
      browserSync.reload();
    }
    gutil.log(gulpUtil.colors.yellow(stdout));
    done();
  }));

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;
  gulpUtil.log(gulpUtil.colors.green("Args: " + options));
  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb(gulpUtil.log(gulpUtil.colors.yellow(stdout)));
    } else {
      browserSync.notify("Hugo build failed :(");
      cb(gulpUtil.log(gulpUtil.colors.red("Hugo build failed")));
    }
  });
}

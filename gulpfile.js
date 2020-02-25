var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var cp = require('child_process');
var BrowserSync = require('browser-sync');

// var responsive = require('gulp-responsive');
// var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var svgSprite = require('gulp-svg-sprite');
var exec = require('child_process').execSync;
var path = require('path');
// gulp-util replacements
// https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
// ## var gulpUtil = require('gulp-util');
// ## var imagemin = require('gulp-imagemin');
// ## var jpegtran = require('imagemin-jpegtran');
// ## var htmlmin = require('gulp-htmlmin');
// ## var httppost = require('gulp-post');
// ## var pngquant = require('imagemin-pngquant');
var log = require('fancy-log');
var colors = require('ansi-colors');
// end gulp-util replacements

var runSequence = require('run-sequence');
var del = require('del');
var request = require('request');
var minify = require('gulp-minify');
var debug = require('gulp-debug');

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
  log(colors.bold(colors.red('🚚  Production Mode')));
} else {
  log(colors.bold(colors.green('🔧  Development Mode')));
}

/**
 * DevMode Config
 * @type {String}
 */
const devOpts = !isProduction ? ["--buildDrafts", "--baseURL", devHost +':' + devPort + '/'] : ["--cleanDestinationDir"];

/**
 * Command that will be executed by `exec()`
 * @type {String}
 */
const command = `hugo -v ${devOpts}`;

gulp.task("hugo:build", (cb) => buildSite(cb, devOpts));

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;
  log(colors.green("Args: " + options));
  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      // cb(log(colors.yellow(stdout)));
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb(log(colors.red("Hugo build failed")));
    }
  });
}

gulp.task('compress', function(done) {
  gulp.src('./src/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./static/js'));
    done();
});

gulp.task("img", done => {
  gulp.src("./src/images/*.{jpg,png}")
    //.pipe(debug({title: 'sources:'}))
    .pipe(changed("./src/images/_resize"))
    .pipe( gulp.dest("./src/images/_resize"))
    //.pipe(debug({title: 'before gulp-responsive:'}))
    // .pipe(responsive({
    //   "*": [
    //   {
    //     width: 480,
    //     rename: {suffix: "-sm"},
    //   }, {
    //     width: 480 * 2,
    //     rename: {suffix: "-sm@2x"},
    //   }, {
    //     width: 675,
    //   }, {
    //     width: 675 * 2,
    //     rename: {suffix: "@2x"},
    //   }],
    // }, {
    //   silent: true,      // Don't spam the console
    //   withoutEnlargement: false,
    //   errorOnUnusedConfig: false
    // }))
    // .pipe(debug({title: 'after gulp-responsive:'}))
    .pipe(gulp.dest("./static/images"));
    done();
});

gulp.task("img:build", done => {
  gulp.src(["./static/images/*.{jpg,png,gif,svg}"])
    // .pipe(cache(imagemin({
    //   optimizationLevel: 7,
    //   progressive: true,
    //   svgoPlugins: [{removeViewBox: false}],
    //   use: [
    //     pngquant()
    //   ]
    // })))
    // .pipe(imagemin([
    //  imagemin.gifsicle(),
    //  imagemin.optipng(),
    //  imagemin.svgo(),
    //  imagemin.jpegtran({progressive: true}),
    // ]))
    // .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest("./static/images"));
    done();
});

gulp.task('css', done => {
    var plugins = [
        require("postcss-preset-env")(),
        require("cssnano")({ autoprefixer: false }),
    ];
    return gulp.src(globs.css)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.css'))
        .pipe(postcss(plugins))
        .pipe(size())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css'));
    done();
});

gulp.task("svg", done => {
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
    .pipe(gulp.dest("./layouts/partials"));
    done();
});

// TODO:
gulp.task("server", gulp.series(gulp.parallel("compress", "img"), "hugo:build"), () => {
  browserSync.init({
    server: {
      baseDir: DIST_DIR
    }
  });
  // gulp.watch("./src/css/**/*.css", ["css", "hugo:build"]);
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
  done();
});

gulp.task('superfeedr', function(done) {
  request.post(
    'http://renem.superfeedr.com/',
    { json: {
      "hub.mode": "publish",
      "hub.url": "https://renem.net/index.xml"
      }
    },
    function (error, response, body) {
        if (!error && response.statusCode == 204) {
          log("pinged Superfeedr");
          //  log(body);
        }
    }
  );
  done();
});

gulp.task('sitemap', function(done) {
//http://www.google.com/webmasters/sitemaps/ping?sitemap=https://renem.net/sitemap.xml
  request.get(
    'http://www.google.com/webmasters/sitemaps/ping?sitemap=https://renem.net/sitemap.xml',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
          log("pinged Google Sitemap");
          //  log(body);
        }
    }
  )
  done();
});


// gulp.task("hugo", (cb) => buildSite(cb, devOpts));
// TODO:
// gulp.task("build", ["compress", "svg", "img:build", "hugo:build"]);

gulp.task('build', gulp.series('img', gulp.parallel('compress', 'svg', 'img:build'), 'hugo:build'));

// TODO:
// gulp.task("build:netlify", ["compress", "hugo:build"]);
gulp.task("build:netlify", gulp.series("compress", "hugo:build"));

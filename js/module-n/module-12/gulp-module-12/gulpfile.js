// Инструкции
const gulp = require("gulp");
// rigger плагин которій работает с HTML
const rigger = require("gulp-rigger");
// очередность выполнения задач
const runSequence = require("run-sequence");

// ================================================
const cssnano = require("gulp-cssnano"); // mincss
const autoprefixer = require("gulp-autoprefixer"); // добавляет автопрефексерры
const sass = require("gulp-sass"); //sass
// сжатие фотографий imagemin ===============================
const imagemin = require("gulp-imagemin");
// добавление js

const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
// =====Отобажать в браузере(следить)========================
const browserSync = require("browser-sync").create();

// Task
gulp.task("html", function() {
  gulp
    .src("src/index.html")
    .pipe(rigger())
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.stream());
});
// =========TASK==============================================

gulp.task("css", function() {
  gulp
    .src("./src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest("build/css/"))
    .pipe(browserSync.stream());
});
// ===========TASK============================================
gulp.task("img", function() {
  gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img/"));
});
// =========================================================
// добавление JS
gulp.task("js", function() {
  return gulp
    .src("./src/js/*.js")
    .pipe(plumber())
    .pipe(babel({presets: ["@babel/env"]}))
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js/"))
    .pipe(browserSync.stream());
});
// =========следить за фвйлами
gulp.task("watch", function() {
  gulp.watch("src/html/*.html", ["html"]);
  gulp.watch("src/*.html", ["html"]);
  gulp.watch("src/scss/*.scss", ["css"]);
  gulp.watch("src/js/*.js", ["js"]);
});
// добавление шрифтов
gulp.task("fonts", () =>
  gulp.src("src/fonts/*").pipe(gulp.dest("build/fonts/"))
);

// ========запуск локального сервера=============================
gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task("build", function(callback) {
  runSequence(
    "html",
    "img",
    "css",
    "fonts",
    "js",
    "watch",
    "browser-sync",
    callback
  );
});

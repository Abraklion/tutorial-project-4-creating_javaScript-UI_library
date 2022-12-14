"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("autoprefixer");
const gcmq = require("gulp-group-css-media-queries")
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

// const dist = "/Applications/MAMP/htdocs/test"; // Ссылка на вашу папку на локальном сервере
const dist = "./docs";


gulp.task("copy-html", () => {
  // такс для .html

  return gulp.src("./src/index.html")
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());

});

gulp.task("build-sass", () => {
  // такс для .scss

  return gulp.src("./src/sass/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());

});

gulp.task("build-js", () => {
  // такс для .js (режим development)

  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);

});

gulp.task("prod", () => {
  // такс для .js .scss (режим production)

  gulp.src("./src/sass/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist));

  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist));

});

gulp.task("watch", () => {
  // такс разворачивает локальный сервер и следит за файлами

  browsersync.init({
    server: "./docs/",
    port: 4000,
    notify: true
  });

  gulp.watch("./src/index.html", gulp.parallel("copy-html"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/sass/**/*.scss", gulp.parallel("build-sass"));

});

gulp.task("development", gulp.parallel("copy-html", "build-js", "build-sass"));

gulp.task("production", gulp.parallel("copy-html", "prod"));

gulp.task("default", gulp.parallel("watch", "development"));
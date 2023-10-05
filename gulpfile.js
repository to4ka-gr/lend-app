import { task, watch, src, dest, parallel } from 'gulp';
import browserSync, { reload, stream } from 'browser-sync';
const sass = require('gulp-sass')(require('sass'));
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from "gulp-rename";
import htmlmin from 'gulp-htmlmin';

// const gulp = require('gulp');
// const browserSync = require('browser-sync');
// const sass = require('gulp-sass')(require('sass'));
// const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');
// const rename = require("gulp-rename");
// const htmlmin = require('gulp-htmlmin');

task('server', function() {

    browserSync({
        server: {
            baseDir: "my-project"
        }
    });

    watch("src/*.html").on('change', reload);
});

task('styles', function() {

    return src("src/style/scss/**/*.+(scss|sass)")

        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest("my-project/style"))
        .pipe(stream());
});

task('watch', function() {

    watch("src/style/scss/**/*.+(scss|sass|css)", parallel('styles'));
    watch("src/*.html").on('change', parallel('html'));
    watch("src/js/**/*.js").on('change', parallel('scripts'));
});

task('html', function () {

    return src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("my-project"));
});

task('scripts', function () {

    return src("src/**/*.js")
        .pipe(dest("my-project"))
        .pipe(stream());
});

task('icons', function () {

    return src("src/icons/**/*.+(svg|png)")
        .pipe(dest("my-project/icons"))
        .pipe(stream());

});

task('default', parallel('watch', 'server', 'styles', 'scripts', 'html', 'icons'));
/// <binding BeforeBuild='copy:lib' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    rimraf = require('rimraf');

paths = {
    node: "node_modules/"
};

paths.angular2 = [];

paths.angular2.push(paths.node + "@angular/core/bundles/core.umd.js");
paths.angular2.push(paths.node + "@angular/common/bundles/common.umd.js");
paths.angular2.push(paths.node + "@angular/compiler/bundles/compiler.umd.js");
paths.angular2.push(paths.node + "@angular/platform-browser/bundles/platform-browser.umd.js");
paths.angular2.push(paths.node + "@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js");
paths.angular2.push(paths.node + "@angular/http/bundles/http.umd.js");
paths.angular2.push(paths.node + ":@angular/router/bundles/router.umd.js");
paths.angular2.push(paths.node + "@angular/forms/bundles/forms.umd.js");

gulp.task('clean', function (cb) {
    return rimraf("./wwwroot/lib", cb);
});

gulp.task("copy:lib", ["clean"], function () {
    gulp.src(paths.angular2).pipe(gulp.dest("./wwwroot/lib/angular2/"));
    gulp.src([paths.node + "rxjs/**/*.js"]).pipe(gulp.dest("./wwwroot/lib/rxjs/"));
    gulp.src([paths.node + "systemjs/dist/system.src.js"]).pipe(gulp.dest("./wwwroot/lib/"));
    gulp.src([paths.node + "core-js/client/shim.min.js"]).pipe(gulp.dest("./wwwroot/lib/"));
    gulp.src([paths.node + "zone.js/dist/zone.js"]).pipe(gulp.dest("./wwwroot/lib/"));
    gulp.src([paths.node + "reflect-metadata/Reflect.js"]).pipe(gulp.dest("./wwwroot/lib/"));
    gulp.src([paths.node + "bootstrap/dist/**/*"]).pipe(gulp.dest("./wwwroot/lib/bootstrap/"));
    gulp.src([paths.node + "jquery/dist/jquery.js"]).pipe(gulp.dest("./wwwroot/lib/"));
});
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:angular2/core.umd.js',
            '@angular/common': 'npm:angular2/common.umd.js',
            '@angular/compiler': 'npm:angular2/compiler.umd.js',
            '@angular/platform-browser': 'npm:angular2/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:angular2/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:angular2/http.umd.js',
            '@angular/router': 'npm:angular2/router.umd.js',
            '@angular/forms': 'npm:angular2/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: { defaultExtension: 'js' }
        }
    });
})(this);
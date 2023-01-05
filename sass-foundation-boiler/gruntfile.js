// var gulp          = require('gulp');
// var browserSync   = require('browser-sync').create();
// var $             = require('gulp-load-plugins')();
// var autoprefixer  = require('autoprefixer');

// var sassPaths = [
//   'node_modules/foundation-sites/scss',
//   'node_modules/motion-ui/src'
// ];

// function sass() {
//   return gulp.src('scss/app.scss')
//     .pipe($.sass({
//       includePaths: sassPaths,
//       outputStyle: 'compressed' // if css compressed **file size**
//     })
//       .on('error', $.sass.logError))
//     .pipe($.postcss([
//       autoprefixer()
//     ]))
//     .pipe(gulp.dest('css'))
//     .pipe(browserSync.stream());
// };

// function serve() {
//   browserSync.init({
//     server: "./"
//   });

//   gulp.watch("scss/*.scss", sass);
//   gulp.watch("*.html").on('change', browserSync.reload);
// }

// gulp.task('sass', sass);
// gulp.task('serve', gulp.series('sass', serve));
// gulp.task('default', gulp.series('sass', serve));

// this version focuses on creating the JS (webpack) and the CSS (cssmin and sass) - not the asset manipulation like images
// TODO: improve the package.json

// There is a separate js file that details the webpack tasks - see below. Webpack does the JS in this case.

module.exports = function (grunt) {

    grunt.initConfig({
        // initialize the configuration object
        // reading the package.json file where the needed grunt plugins are located among others.
        // A grunt library typically has a name like grunt-contrib-* in package.json
        // but then would have another name below with the grunt-contrib-* preffix dropped.
        // like grunt-contrib-cssmin in package.json and npm becomes simply "cssmin" in the config below.

        pkg: grunt.file.readJSON('package.json'),
        // minified the css files
        cssmin: {
            options: {
                report: 'min',
                shorthandCompacting: false,
                roundingPrecision: -1
            },

            css_to_minize: {
                files: [
                    {
                        src: 'dist/main.css',
                        dest: 'dist/main.min.css'
                    }
                ]
            },

        },

        // scss sass files become css files with the tasks below
        // More can be customized https://stackoverflow.com/questions/28724465/creating-multiple-themes-css-files-with-foundation-grunt-sass
        sass: {
            dist: { // dist has options and determines the output files
                options: {
                    style: 'compressed',
                    //includePaths: [], //setting foundation folder?
                    // need compressed to deal properly with multiline comments taht have been present in the SCSS files
                    implementation: require("node-sass")
                },

                files: [
                    {
                        'dist/main.css': 'app.scss'
                    }
                ]
            }

        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('dist-css', ['sass', 'cssmin:css_to_minize']); // creates target CSS and minifies it - chains tasks with []
    grunt.registerTask('default', 'dist-css');


};



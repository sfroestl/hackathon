module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        concat: {
            dist: {
                src: ['bower_components/angular/angular.js', 'src/app.js'],
                dest: 'dist/build.js'
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/**/*.js']
        },

        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['build']
            },
            templates: {
                files: ['src/**/*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'jshint:all',
        'concat:dist'
    ]);
};

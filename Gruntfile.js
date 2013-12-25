module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        concat: {
            dist: {
                src: ['bower_components/angular/angular.js', 'src/app.js'],
                dest: 'dist/built.js'
            }
        },

        jshint: {
            all: ['src/**/*.js']
        },

        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['build'],
                options: {
                   spawn: false,
                }
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

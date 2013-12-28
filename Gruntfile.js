module.exports = function (grunt) {

    'use strict';

    var libraries = [
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
    ];


    grunt.initConfig({

        concat: {
            libraries: {
                src: libraries,
                dest: 'dist/libraries.js'
            },
            dist: {
                src: ['src/**/*.js'],
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
                tasks: ['default']
            },
            templates: {
                files: ['src/**/*.html']
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                options: {
                    singleRun: true,
                    files: [
                        'dist/build.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'spec/**/*.spec.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint:all',
        'concat:dist'
    ]);

    grunt.registerTask('build', [
        'jshint:all',
        'concat:libraries',
        'concat:dist'
    ]);
};

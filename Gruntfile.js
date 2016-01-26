module.exports = function(grunt) {
  grunt.initConfig({

    clean: ['dist'],

    copy: {
      all: {
        src: ['*.css', '*.html', 'images/**/*', 'img/**/*', '!Gruntfile.js', 'data/**/*'],
        dest: 'dist/',
      },
    },

    browserify: {
      all: {
        src: ['src/**/*.js', 'src/**/*.jsx'],
        dest: 'dist/app.js'
      },
      options: {
        transform: ['reactify']
      }
    },

    less: {
      all: {
        src: 'styles/**/*.less',
        dest: 'dist/style.css'
      }
    },

    connect: {
      options: {
        port: process.env.PORT || 3131,
        base: 'dist/',
      },

      all: {},
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: ['**/*.html', '!dist/**/*'],
        tasks: ['copy'],
      },

      js: {
        files: '<%= browserify.all.src %>',
        tasks: ['browserify'],
      },

      less: {
        files: '<%= less.all.src %>',
        tasks: ['less']
      },

      assets: {
        files: ['assets/**/*', '*.css', 'images/**/*', 'img/**/*', '!Gruntfile.js', 'data/**/*'],
        tasks: ['copy'],
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['clean', 'less', 'browserify', 'copy']);

  grunt.registerTask('server', ['default', 'connect', 'watch']);

};

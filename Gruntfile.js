module.exports = function(grunt) {

  var npmDependencies = require('./package.json').devDependencies;

  grunt.initConfig({
    watch: {
      sass: {
        files: ['scss/{,*/}*.scss'],
        tasks: ['sass:dev']
      }
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: require('node-bourbon').includePaths
      },

      production: {
        options: {
          outputStyle: 'compressed'
        },

        files: {
          'css/main.css': 'scss/main.scss'
        }
      },

      dev: {
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'js/*.js',
            'css/*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './',
          port: 8080
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task
  grunt.registerTask('default', ['browserSync', 'watch']);
};

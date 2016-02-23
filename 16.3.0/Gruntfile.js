module.exports = function(grunt) {

var path = require("path");
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    docs: {
      source: '/_book/',
      destination: '/_book/',
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          keepClosingSlash: true,
          minifyCSS: true,
          minifyJS: true
        },
        files: [{
          expand: true,
          cwd: '<%= docs.source %>',
          src: ['**/*.html'],
          dest: '<%= docs.destination %>'
        }]
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= docs.source %>',
          src: ['**/*.css', '!**/*.min.css'],
          dest: '<%= docs.destination %>',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['htmlmin', 'cssmin']);

};

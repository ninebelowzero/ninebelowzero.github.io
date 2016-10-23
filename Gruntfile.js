module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['script.js']
    },
    sass: {
      expanded: {
        options: { outputStyle: 'expanded' },
        files: { 'style.css': 'style.sass' }
      }
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js', 'package.json'],
        options: { reload: true }
      },
      sass: {
        files: ['*.sass'],
        tasks: ['sass:expanded'],
        options: { livereload: true }
      },
      js: {
        files: ['script.js'],
        tasks: ['jshint'],
        options: { livereload: true }
      },
      index: {
        files: ['index.html'],
        options: { livereload: true }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);

}
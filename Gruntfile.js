module.exports = function(grunt) {

  grunt.initConfig({
    imagemin: {
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'images/',
            src: ['**/*.jpg'],
            dest: 'images/',
            ext: '.jpg'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('imagejpg', ['imagemin:jpg']); // only .jpg files

};
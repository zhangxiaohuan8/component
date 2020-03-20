module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {  
        'dist/excel.css': 'excel.css'
      },
      uglify: {
        release:{
          files: {
            'dist/excel.js': 'excel.js',
            'dist/echart.js':'echart.js'
          }
        }
      }	    
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };
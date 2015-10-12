module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jsonmin: {
      dev: {
        options: {
          stripWhitespace: true,
          stripComments: true
        },
        files: {
          "dist/wcag.min.json" : "dist/wcag.json"
        }
      }
    },

    json_merge: {
      options: {
        replacer: null,
        space: " "
      },
      your_target: {
        files: { 'dist/wcag.json': ['tmp/**/*.{json,y{,a}ml}'] },
      },
    }, // json_merge

    yaml: {
      your_target: {
        options: {
          ignored: /^_/,
          space: 4,
          constructors: {
            '!include': function (node, yaml) {
              var data = grunt.file.read(node.value, 'utf-8');
              return yaml.load(data);
            }
          }
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.yml'],
            dest: 'tmp/'
          }
        ]
      }
    }


  });

  // Linting, mostly to test JSON.
  grunt.registerTask('yaml_to_json', ['yaml']);

  grunt.registerTask('build_json', ['json_merge']);

  grunt.registerTask('minify_json', ['jsonmin']);

  grunt.registerTask('build',['yaml','json_merge','jsonmin']);


};

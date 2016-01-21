module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // convert YAML to JSON
    // https://github.com/shiwano/grunt-yaml
    yaml: {
      your_target: {
        options: {
          // ignored: /^_/,
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
    }, // yaml

    // combine JSON partial files
    // https://github.com/ramiel/grunt-json-merge
    json_merge: {
      options: {
        replacer: null,
        space: " "
      },
      your_target: {
        // files: { 'dist/wcag.json': ['tmp/**/*.{json,y{,a}ml}'] },
        files: { 'dist/wcag.json' : ['tmp/en/1.2.1.json','tmp/en/1.2.2.json'] }
      },
    }, // json_merge

    // minify JSON
    // https://www.npmjs.com/package/grunt-jsonmin
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
    }, // jsonmin


  });

  grunt.registerTask('build',['yaml','json_merge','jsonmin']);


};

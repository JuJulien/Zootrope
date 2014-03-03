# Generated on 2014-02-20 using generator-coffeelib 0.0.1
'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require("load-grunt-tasks")(grunt)

  grunt.initConfig
    config:
      src: 'src'
      dist : './'

    coffee:
      options:
        sourceMap: true
      build:
        files: [
          expand: true
          cwd: '<%= config.src %>'
          src: '{,*/}*.coffee'
          dest: '<%= config.dist %>'
          ext: '.js'
        ]

    uglify:
      build:
        src: '<%=config.dist %>/imga.js'
        dest: '<%=config.dist %>/imga.min.js'

    mochaTest:
      test:
        options:
          reporter: 'spec'
          compilers: 'coffee:coffee-script'
        src: ['test/**/*.coffee']

    connect:
      all:
        options:
          livereload: grunt.option('liveport') || 35729
          port: grunt.option('port') || 9000
          hostname: "0.0.0.0"

    watch:
      options:
        livereload: grunt.option('liveport') || 35729
      coffee:
        files: ['src/*.coffee']
        tasks: ['coffee:build']
      html:
        files: ['examples/*']
      css:
        files: ['css/*']

    grunt.registerTask 'server', [
      'coffee:build'
      'uglify:build'
    ]

    grunt.registerTask 'default', [
      'coffee:build'
      'connect',
      'watch'
    ]


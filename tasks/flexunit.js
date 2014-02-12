/*
 * grunt-flexunit
 * https://github.com/JamesMGreene/grunt-flexunit
 *
 * Copyright (c) 2014 James M. Greene
 * Licensed under the MIT license.
 */

'use strict';

// Node core modules
var childProcess = require('child_process');

// Node userland modules
var flexSdk = require('flex-sdk');
var async = require('async');

// Internal modules
var flexunitOptions = require('./lib/options');
var templar = require('./lib/templar');
// var testRunnerFileContents = templar.testRunner({ /* data */ }, { /* options */ });
// var flexUnitDescriptorFileContents = templar.flexUnitDescriptor({ /* data */ }, { /* options */ });


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('flexunit', 'A Grunt task plugin to running FlexUnit tests for apps built on Adobe Flex/ActionScript/MXML/FLV/AIR/etc.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var defaults = flexunitOptions.getDefaults();
    var options = this.options(defaults);
    var done = this.async();

    var workerFn = function(f, callback) {
      // Concat specified files.
      var srcList = !(f && f.src && "length" in f.src) ? [] : f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.error('Source file "' + filepath + '" not found.');
          return false;
        }
        else {
          return true;
        }
      });

      // Handle options.
      var cmdLineOpts = flexunitOptions.toCommandLineArgs(options);
      var destination = f.dest || options.output || null;
      if (destination) {
        cmdLineOpts.push('-output');
        cmdLineOpts.push(destination);
      }
      if (srcList.length) {
        cmdLineOpts.push('-doc-sources');
        cmdLineOpts.push.apply(cmdLineOpts, srcList);
      }

      grunt.verbose.writeln('asdoc path: ' + flexSdk.bin.asdoc);
      grunt.verbose.writeln('options: ' + JSON.stringify(cmdLineOpts));

      // Generate documentation!
      var withForce = options.force === true || grunt.option('force') === true;
      childProcess.execFile(flexSdk.bin.asdoc, cmdLineOpts, function(err, stdout, stderr) {
        // TODO: Probably want to do something more here...? Not positive yet.
        if (!err) {
          var destMsg = 'Documentation generated in' + (destination ? ': "' + destination + '"' : ' default location.');
          grunt.log.writeln(destMsg);
        }
        else {
          grunt.log.error(err.toString());
          grunt.verbose.writeln('stdout: ' + stdout);
          grunt.verbose.writeln('stderr: ' + stderr);

          if (withForce) {
            grunt.log.warn('Should have failed but will continue because this task had the `force` option set to `true`.');
          }
          else {
            grunt.fail.warn('FAILED');
          }
        }

        callback(err);
      });
    };

    var maxConcurrency = 1;
    var q = async.queue(workerFn, maxConcurrency);
    q.drain = done;

    // Iterate over all specified file groups.
    if (this.files && this.files.length) {
      q.push(this.files);
    }
    //else {
      // Push an empty filesSrc as this task can work without any src-dest mappings
    //  q.push([{ src: [] }]);
    //}
  });
};

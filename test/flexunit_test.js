// nodeunit-based Functionality Tests

'use strict';

var fs = require('fs');
var path = require('path');

fs.existsSync = fs.existsSync || path.existsSync;

var os = require('os');
var tmpDir = typeof os.tmpdir === 'function' ? os.tmpdir() : os.tmpDir();


module.exports = {

  testFlexUnitSuccess: function(test) {
    test.expect(3);

    var targetSource = path.join(__dirname, 'testData', 'testApp.as');
    var targetDestDir = path.join(tmpDir, 'testResults1');
    var targetDestIndex = path.join(targetDestDir, 'index.html');

    test.strictEqual(fs.existsSync(targetSource), true, 'input source file should exist');
    test.strictEqual(fs.existsSync(targetDestDir), true, 'documentation directory should exist');
    test.strictEqual(fs.existsSync(targetDestIndex), true, 'documentation index file should exist');

    test.done();
  },

  testFlexUnitFailureDueToSynaxError: function(test) {
    test.expect(2);

    var targetSource = path.join(__dirname, 'testData', 'errorApp.as');
    var targetDestIndex = path.join(tmpDir, 'testResults2', 'index.html');

    test.strictEqual(fs.existsSync(targetSource), true, 'input source file should exist');
    test.strictEqual(fs.existsSync(targetDestIndex), false, 'documentation index file should NOT exist');

    test.done();
  },

  testFlexUnitFailureDueToTestError: function(test) {
    test.expect(2);

    var targetSource = path.join(__dirname, 'testData', 'failingApp.as');
    var targetDestIndex = path.join(tmpDir, 'testResults3', 'index.html');

    test.strictEqual(fs.existsSync(targetSource), true, 'input source file should exist');
    test.strictEqual(fs.existsSync(targetDestIndex), false, 'documentation index file should NOT exist');

    test.done();
  }
};

'use strict';

// Node core modules
var path = require('path');
var fs = require('fs');

// Node userland modules
var _ = require('lodash');
var semver = require('semver');
var flexSdkVersion = require('local-version').sync('flex-sdk');
var isFlex3 = semver.satisfies(flexSdkVersion, '3.x');

function useFlashPlayer(options) {
  return !(options && typeof options.player === 'string' && options.player && options.player.toLowerCase() === 'air');
}

function getTestRunnerTemplateData(options) {
  var useFlash = useFlashPlayer(options);
  return {
    APPLICATION_PREFIX: isFlex3 ? 'mx' : 's',
    APPLICATION_CLASS: useFlash ? 'Application' : 'WindowedApplication',
    NAMESPACES: isFlex3 ? 'xmlns:mx="http://www.adobe.com/2006/mxml"' : 'xmlns:fx="http://ns.adobe.com/mxml/2009"\nxmlns:s="library://ns.adobe.com/flex/spark"',
    MXML_PREFIX: isFlex3 ? 'mx' : 'fx',
    CI_LISTENER_CLASS: useFlash ? 'CIListener' : 'AirCIListener',
    CLASS_REFS: [],
    IMPORT_REFS: []
  };
}


// Export API
module.exports = {
  testRunner: function(data, options) {
    var tmpl = fs.readFileSync(path.resolve(__dirname, '../templates/TestRunner.mxml.tmpl'));
    data = _.merge(getTestRunnerTemplateData(options), data);
    return _.template(tmpl, data, options);
  }
  // TODO: Implement this
  /*,
  flexUnitDescriptor: function(data, options) {
    var tmpl = fs.readFileSync(path.resolve(__dirname, '../templates/flexUnitDescriptor.xml.tmpl'));
    data = _.merge(getFlexUnitDescriptorTemplateData(options), data);
    return _.template(tmpl, data, options);
    return processTemplate(, data, options);
  }
  */
};
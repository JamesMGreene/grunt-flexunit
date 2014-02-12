'use strict';

// Node core modules
var path = require('path');
var fs = require('fs');

// Node userland modules
var extend = require('node.extend');
var _ = require('lodash');
var semver = require('semver');
var flexSdkVersion = require('local-version').sync('flex-sdk');
var isFlex3 = semver.satisfies(flexSdkVersion, '3.x');


function getTemplateData(useFlashPlayer) {
  return {
    APPLICATION_PREFIX: isFlex3 ? 'mx' : 's',
    APPLICATION_CLASS: useFlashPlayer ? 'Application' : 'WindowedApplication',
    NAMESPACES: isFlex3 ? 'xmlns:mx="http://www.adobe.com/2006/mxml"' : 'xmlns:fx="http://ns.adobe.com/mxml/2009"\nxmlns:s="library://ns.adobe.com/flex/spark"',
    MXML_PREFIX: isFlex3 ? 'mx' : 'fx',
    CI_LISTENER_CLASS: useFlashPlayer ? 'CIListener' : 'AirCIListener',
    CLASS_REFS: [],
    IMPORT_REFS: [];
  };
}

function processTemplate(templateFile, data, options) {
  var useFlashPlayer = !(options && options.player && options.player.toLowerCase() === 'air');
  data = extend(true, getTemplateData(useFlashPlayer), data);

  var tmpl = fs.readFileSync(templateFile);
  return _.template(tmpl, data);
}


// Export API
module.exports = {
  testRunner: function(data, options) {
    return processTemplate('../templates/TestRunner.mxml.tmpl', data, options);
  },
  flexUnitDescriptor: function(data, options) {
    return processTemplate('../templates/flexUnitDescriptor.xml.tmpl', data, options);
  }
};
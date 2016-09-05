require('jasmine-core/lib/jasmine-core/jasmine.css');

// TODO There should be a better way to do this
window.jasmineRequire = require('jasmine-core/lib/jasmine-core/jasmine');

require('jasmine-core/lib/jasmine-core/jasmine-html');
require('jasmine-core/lib/jasmine-core/boot');

require('./AppCtrlSpecs');

// TODO There should be a better way to do this
window.jasmineRequire = require('jasmine-core/lib/jasmine-core/jasmine');

require('jasmine-core/lib/jasmine-core/jasmine-html');
require('jasmine-core/lib/jasmine-core/boot');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

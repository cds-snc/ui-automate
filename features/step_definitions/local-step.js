'use strict';

const assert = require('cucumber-assert');
const webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When(/^I open health check$/, function (next) {
    this.driver.get('http://myip:40091/check');
    next();
  });

  this.Then(/^I should see "([^"]*)"$/, function (sourceMatch, next) {
    this.driver.getPageSource()
      .then(function(source) {
        assert.equal(source.indexOf(sourceMatch) > -1, true, next, 'Expected source to contain ' + sourceMatch);
      });
  });
};

'use strict';

const assert = require('cucumber-assert');
const webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When('I navigate to GC forms',  function (next) {
    this.driver.get('https://forms-staging.cdssandbox.xyz');  
    next();  
  });

  this.Then(/^I should see title "([^"]*)"$/,  function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
      });
  });
};
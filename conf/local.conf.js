exports.config = {
    user: 'BROWSERSTACK_USERNAME',
    key: 'BROWSERSTACK_ACCESS_KEY',
    server: 'hub-cloud.browserstack.com',
  
    capabilities: [{
      browserName: 'chrome',
      name: "local_test",
      build: "GC Forms - Formulaires GC UI-Automate",
      'browserstack.local': true
    }]
  }
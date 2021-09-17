#!/usr/bin/env node
require('dotenv').config();
const os = require('os');

const child_process = require('child_process');
const config_file = '../conf/' + (process.env.CONFIG_FILE || 'single') + '.conf.js';
const config = require(config_file).config;
const command = '/usr/bin/env';

process.argv[0] = 'node';
process.argv[1] = './node_modules/cucumber/bin/cucumber.js';

for(var i in config.capabilities){
  let env = Object.create( process.env );
  env.TASK_ID = i.toString();
  let p = child_process.spawn(command, process.argv, { env: env } );
  p.stdout.pipe(process.stdout);
}
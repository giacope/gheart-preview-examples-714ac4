#!/usr/bin/env node
import { hello } from './commands/hello';
import { stats } from './commands/stats';

const [cmd, ...args] = process.argv.slice(2);
switch (cmd) {
  case 'hello':
    hello(args);
    break;
  case 'stats':
    stats();
    break;
  default:
    console.log('usage: acme <hello|stats> [options]');
}

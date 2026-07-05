#!/usr/bin/env node
import { hello } from './commands/hello';

const [cmd, ...args] = process.argv.slice(2);
switch (cmd) {
  case 'hello':
    hello(args);
    break;
  default:
    console.log('usage: acme <hello> [options]');
}

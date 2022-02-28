#! /usr/bin/env node
const serve = require('./serve');
const list = require('./list');
const download = require('./download');
const DEFAULT_ADDRESS = '0.0.0.0:11111';

const usageText = () => {
  console.log(`NAME:
    ft-js File Transfer JS

DESCRIPTION:
    This tool is an implementation of ft in Node.js.
    https://github.com/mattn/ft
    
USAGE:
    ft-js [global options] command [command options] [arguments...]

COMMANDS:
    download  download files from server
    serve     serve files
    list      list files from server by CSV format
    help, h   Shows a list of commands or help for one command

COMMAND OPTIONS:
    -a        address

GLOBAL OPTIONS:
    --help, -h     show help
    --version, -v  print the version`);
};

const versionText = () => console.log('ft-js version: 0.0.1');

(async () => {
  const args = process.argv.slice(2);

  let specifyAddress;
  if (args.length === 3 && args[1] === '-a') {
    specifyAddress = args[2];
  }

  const address = specifyAddress || DEFAULT_ADDRESS;

  switch (args[0]) {
    case '--help' || '-h':
      usageText();
      break;
    case '--version' || '-v':
      versionText();
      break;
    case 'serve':
      console.log('[ft-js]' + args[0] + ': ' + address);
      serve(address);
      break;
    case 'download':
      console.log('[ft-js]' + args[0] + ': ' + address);
      download(address);
      break;
    case 'list':
      console.log('[ft-js]' + args[0] + ': ' + address);
      list(address);
      break;
    default:
      usageText();
      break;
  }
})();

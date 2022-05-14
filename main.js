#! /usr/bin/env node
const serve = require('./serve');
const list = require('./list');
const download = require('./download');
const { parse } = require('./cmd-parser');
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
    list      list files from server by CSV format or JSON format(--json option must be added)
    help, h   Shows a list of commands or help for one command

COMMAND OPTIONS:
    -a        address

GLOBAL OPTIONS:
    --help, -h     show help
    --version, -v  print the version`);
};

const versionText = () => console.log(require('./package.json').version);

(async () => {
  const parsedArgs = parse(process.argv.slice(2));

  const address = parsedArgs.address || DEFAULT_ADDRESS;

  switch (parsedArgs.command) {
    case '--help':
      usageText();
      break;
    case '-h':
      usageText();
      break;
    case '--version':
      versionText();
      break;
    case '-v':
      versionText();
      break;
    case 'serve':
      console.log('[ft-js] ' + parsedArgs.command + ': ' + address);
      serve(address);
      break;
    case 'download':
      download(address);
      break;
    case 'list':
      const format = parsedArgs.listOption === '--json' ? 'json' : 'csv';
      list(address, format);
      break;
    default:
      usageText();
      break;
  }
})();

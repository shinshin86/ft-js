# ft-js

File Transfer JS

This tool is an implementation of [ft](https://github.com/mattn/ft) in Node.js.

## Install

This tool is released as scoped modules and should be installed as follows.

```sh
# npm
npm install -g ft-js@npm:@shinshin86/ft-js

# yarn
yarn global add ft-js@npm:@shinshin86/ft-js
```

### If you are using the Apple Silicon (M1 mac)

For Apple Silicon, the dependent module is not supported and must be installed as follows.

```sh
# npm
npm_config_target_arch=x64 npm install -g ft-js@npm:@shinshin86/ft-js

# yarn
npm_config_target_arch=x64 yarn global add ft-js@npm:@shinshin86/ft-js
```

## Usage

```sh
ft-js [global options] command [command options] [arguments...]
```

### Commands

- download - download files from server
- serve - serve files
- list - list files from server by CSV format
- help, h - Shows a list of commands or help for one command

## Development

### Setup

```sh
# Install
yarn

# If you are using the M1 mac
npm_config_target_arch=x64 yarn
```

### Generate code

```sh
yarn gen
```

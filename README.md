# ft-js

File Transfer JS

This tool is an implementation of [ft](https://github.com/mattn/ft) in Node.js.

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

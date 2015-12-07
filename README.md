[![Build Status](https://travis-ci.org/thelostspore/tessel-sketches.svg?branch=master)](https://travis-ci.org/thelostspore/tessel-sketches)
[![Dependency Status](https://david-dm.org/thelostspore/tessel-sketches.svg)](https://david-dm.org/thelostspore/tessel-sketches)

# tessel-sketches
General examples for Tessel v1 and scaffolding skeleton for tessel projects.

## Requirements
- Install [Tessel CLI](http://start.tessel.io/install)
  - **Note**: Tessel V1 CLI requires node versions `0.10` or `0.12`. You can manage your shell's node version with [nvm](https://github.com/creationix/nvm).

- Install [Gulp](http://gulpjs.com/) [globally](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally).

- Optional: Ensure your Tessel's [wifi connection](http://start.tessel.io/wifi) for sketches that use Tessel's built-in [wifi radio](https://github.com/tessel/t1-docs/blob/master/wifi.md#connect-tessel-to-wifi), which is a [TI CC3000](http://www.ti.com/lit/ds/symlink/cc3000.pdf).

## Instructions
```
git clone https://github.com/thelostspore/tessel-sketches
cd tessel-sketches
npm install
```
This repo contains several projects (each is a directory in `src`). Run any project's script on the Tessel using the [v1 CLI](https://github.com/tessel/t1-docs/blob/master/cli.md).

See the [Projects README](./src/) for instructions on managing each project's dependencies.


## Notes
#### Code Linting
The Tessel does not always provide useful error messages if there are syntax errors in your code. The default `gulp` task lints all scripts with [jshint](https://github.com/spalger/gulp-jshint). Manage code linting options with `.jshintrc` and [inline configuration](http://jshint.com/docs/#inline-configuration).

#### Project dependencies
Each project in the `src` directory has its own `package.json` and dependencies to limit the bundle size deployed to Tessel for any given script. See the [Package project](./src/02_Packages/) to learn more about code deployments to the Tessel.

#### Tessel V2
I will create a new repo for Tessel V2 sketches when the new boards are released in January 2016.

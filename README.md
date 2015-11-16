# tessel-sketches

General examples for tessel v1 and scaffolding skeleton for tessel projects.

## Requirements:
- Install [Tessel CLI](http://start.tessel.io/install)

- Ensure your tessel's [wifi connection](http://start.tessel.io/wifi)

## Instructions:
```
git clone https://github.com/thelostspore/tessel-sketches
cd tessel-sketches
npm install
cd src
npm install
```

`gulp` lints code with [jshint](https://github.com/spalger/gulp-jshint). Manage code linting options with `.jshintrc` and [inline configuration](http://jshint.com/docs/#inline-configuration)

Run any of the src scripts on the tessel using the Tessel [v1 CLI](https://github.com/tessel/t1-docs/blob/master/cli.md).

## Notes
The `src` directory has its own `package.json` & dependencies as `tessel` commands `run` or `push` will build a package with all local `node_modules` before deploying it to the tessel. If your builds are too large, be sure the `node_modules` directory contains only the essential libraries for the given script. Only keep scripts that have the same dependencies in the same folder - this strategy keeps builds lighter.


I will update all references to Tessel v1 after the v2 boards are released in January 2016.


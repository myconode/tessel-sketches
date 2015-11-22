# tessel-sketches src

## For project-level requirements and instructions, see primary [README](../README.md).

# This directory consists of source directories for tessel builds (uploads).
- To update dependencies of a given project, use `npm install --save <package>` and/or modify `package.json` directly.
- Running `npm install` in the root of this project will update all dependencies.

This directory has its own `package.json` and dependencies because `tessel` commands `run` or `push` build a package with all local `node_modules` before deploying it to the tessel. The project

If your builds are too large, be sure the `node_modules` directory contains only the essential libraries for the given script. Only keep scripts that have the same dependencies in the same folder - this strategy keeps builds lighter.

# Projects - Sketch groups:
- 01_Start: A few examples for new Tesselators

# Utilities:
- [delay](./utils/index.js): pause program for the amount of time (in miliseconds) specified as parameter.

## Instructions
`gulp` lints code with [jshint](https://github.com/spalger/gulp-jshint). Manage code linting options with `.jshintrc` and [inline configuration](http://jshint.com/docs/#inline-configuration)

Upload any of the src scripts on the tessel using the Tessel [v1 CLI](https://github.com/tessel/t1-docs/blob/master/cli.md).

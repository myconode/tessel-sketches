# Sketches

For **project-level** requirements and instructions, see primary [README](../README.md).

This directory consists of tessel projects (builds). Individual scripts are grouped together based on common dependencies.

- To update dependencies of a given project, `cd` into the project directory and execute `npm install --save <package>` and/or modify `package.json` directly.
- Running `npm run all-deps` will update all dependencies for each project.

This directory has its own `package.json` and dependencies because `tessel` commands `run` or `push` build a package with all local `node_modules` before deploying it to the tessel.

If your builds are too large, be sure the `node_modules` directory contains only the essential libraries for the given script. Only keep scripts that have the same dependencies in the same folder - this strategy keeps builds lighter.

## Projects - Sketch groups:
- 01_Start: A few examples for new Tesselators

## Utilities:
- [delay](./utils/index.js): pause program for the amount of time (in miliseconds) specified as parameter.

## Instructions
Upload any of the src scripts on the tessel using the Tessel [v1 CLI](https://github.com/tessel/t1-docs/blob/master/cli.md).

If you are receiving errors, check your code for errors using `gulp`.

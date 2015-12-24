# 02_Packages
This project covers the Tessel code deployment process.

## Instructions

### npm dependencies
Dependencies are managed using the [package.json interface](https://docs.npmjs.com/misc/developers#the-package-json-file). Within each project is a `package.json` to manage its specific dependencies.

### npm install
To install dependencies for a given project, run `npm install` in a working directory that contains a `package.json`. Alternatively, install dependencies for all of this repo's projects with this custom script:
```
npm run install-project-deps
```

Running `npm install` will create a `node_modules` folder in your current working directory and install dependencies that were specified in the `package.json`.

`npm install` **never removes libraries** from `node_modules`.


## Tessel Builds
As mentioned in the primary [readme](../../README.md#Notes), it is important to be mindful of your project's dependencies, as the Tessel has a limited amount of memory for deployed code (**32 MB**). "Deployed code" means not just your script but its dependencies (`node_modules`) as well.

`tessel` commands (such as `run` or `push`) build a package with all local dependencies before deploying the bundle to the Tessel. It is important to keep your builds small, or uploading code to the Tessel could take a long time or fail.

If your builds are too large, be sure your project's `node_modules` directory contains only the essential libraries for the given script (otherwise, **remove it** and run `npm install` again). In general, if you only keep scripts that have the same dependencies in the same folder, your builds for a given project will be lighter.

### Dependencies
- [q](https://github.com/kriskowal/q)

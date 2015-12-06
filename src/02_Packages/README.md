# 02_Packages
This project covers the Tessel code deployment process and keeping data private.

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
As mentioned in the primary [readme](../../README.md#Notes), it is important to be mindful of your project's dependencies, as the Tessel has a limited amount of memory for deployed code (**32 MB**).

`tessel` commands (such as `run` or `push`) build a package with all local dependencies before deploying the bundle to the Tessel. It is important to keep your builds small, or uploading code to the Tessel could take a long time or fail.

If your builds are too large, be sure your project's `node_modules` directory contains only the essential libraries for the given script (otherwise, **remove it** and run `npm install` again). In general, if you only keep scripts that have the same dependencies in the same folder, your builds will be lighter.


## Private Data
There are scenarios where you will want to provide access credentials to objects in Tessel programs. It is worth knowing a way to keep this data private when using a public version control system like git.

A simple example: an API key. Say you want to communicate with a service that requires an API key, you'll need to do something like this:
```node
var msgAPI = require('ex-msg-api')
var msgr = msgAPI({ user: 'username', apiKey: '##### '})
```

You'll never want to check that into version control. Its all too easy to forget to remove it before you commit and push remotely. Even if you rewrite your history and force-push, it can be too late because there are [bots that crawl github looking for API keys](http://www.devfactor.net/2014/12/30/2375-amazon-mistake/).

### Creds
One simple way to keep your Wifi credentials out of version control is to create a basic
node module that you do not distribute. We'll make a new directory called `creds` and
prevent it from being checked into git.

###Instructions
- Add `**/creds` to your **.gitignore**
- With `02_Packages` as your current working directory:
```sh
mkdir creds
cd creds
touch index.js
```

Paste the below script into `index.js` and enter values as needed
```node
var creds = {};

// Enter values
creds.msgAPIKey = "###############";

module.exports = creds;
```

### Usage
Example usage of `creds` modules:
```node
/*
Assuming this directory structure:
- project
  - creds
    - index.js
  - use_creds_ex.js
  - package.json
*/

// use_creds_ex.js
// reference to local module
var creds = require("./creds")

// do whatever you need with the API key reference
console.log(creds.msgAPIKey)
```

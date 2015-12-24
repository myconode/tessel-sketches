# 03_PrivateData
A low-tech way to keep your data private when working with the Tessel.

## Instructions
Hopefully you're getting the hang of this, if not check out sections [one](../01_Basics) or [two](../02_Packages). Simply `npm install` here, or install all of this repo's dependencies via `npm run install-project-deps`.

**Note**: I'll say it one more time, `npm install` **never removes libraries** from `node_modules`. Keep this in mind when you're developing a project and frequently deploying to the Tessel.

## Private Data
There are scenarios where you will want to provide access credentials to objects in Tessel programs. It is worth knowing a way to keep this data private when using a public version control system like git.

A simple example: an API key. Say you want to communicate with a service that requires an API key, you'll need to do something like this:
```node
var msgAPI = require('ex-msg-api')
var msgr = msgAPI({ user: 'username', apiKey: '##### '})
```

You'll **never** want to check that into version control. Its all too easy to forget to remove it before you commit and push remotely. Even if you rewrite your history and force-push, it can be too late because there are [bots that crawl github looking for API keys](http://www.devfactor.net/2014/12/30/2375-amazon-mistake/).

### Creds
One simple way to keep your Wifi credentials out of version control is to create a basic
node module that you do not distribute. We'll make a new directory called `creds` and
prevent it from being checked into git.

###Instructions
- Add `**/creds` to your **.gitignore**
- With `03_PrivateData` as your current working directory:
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

Run `01_PrivateData.js` on your Tessel to see this in action.

### Dependencies
- No external dependencies. Only the local `creds` module.

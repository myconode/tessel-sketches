# 02_Connecting
The second project will focus on connecting to the Internet using the built-in Wifi module.

Before we use the Wifi module, it is worth mentioning a way to keep your private data safe
when using public version control. Private data for this project requires Wifi credentials.

## Private Data
One simple way to keep your Wifi credentials out of version control is to create a basic
node module that you do not distribute. We'll make a new directory called `creds` and
prevent it from being checked into git.

###Instructions
- Add `**/creds` to your .gitignore
- With `02_Connecting` as your current working directory:
```
mkdir creds
cd creds
touch index.js
```
- Paste the below script into `index.js` and enter values
```node
// Creds.js
// Enter values for your network
var network = '#####'
var netpass = '#####'
var sec = 'wpa2' // other options are 'wep', 'wpa', or 'unsecured'

var creds = {};

var wifiSettings = { security: sec,
                     ssid: network,
                     password: pass,
                     timeout: 30
                   };


creds.wifiConfig = wifiSettings;

module.exports = creds;
```

### Usage
Example usage of `creds` modules

```node
var wifi = require('wifi-cc3000')
var creds = require("./creds") // reference to local module

// provide `wifiConfig` object to `wifi` hardware module
wifi.connect(creds.wifiConfig)
```

## Wifi Connection issues
Below is Tessel's troubleshooting instructions.
TesselV1 [Wifi documentation](https://github.com/tessel/t1-docs/blob/master/wifi.md#connecting-to-wifi-from-js)

##
Check to see if Tessel is connected to wifi using Tessel CLI, `tessel wifi -l`.
If there is no IP address, the Tessel is not connected to Wifi.
Try power cycling your Tessel and then run the tessel wifi connection command again.
- Remove saved wifi profiles => `tessel stop; tessel wifi -d`
- Move closer to the router.
- Reset the router.
- Make sure the router has b/g mode enabled and isn't using channels 12, 13, or 14.




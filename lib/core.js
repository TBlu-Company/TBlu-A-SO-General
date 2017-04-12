'use strict';
const ping = require('./actions/ping.js');
const osPlatform = require('./actions/osPlatform.js');
const osCPU = require('./actions/osCPU.js');
const osHostname = require('./actions/osHostname.js');
const osMemory = require('./actions/osMemory.js');
const osNetworkInterfaces = require('./actions/osNetworkInterfaces.js');

exports.run = (data, dBconfig) => new Promise((resolve, reject) => {
    switch (data.moduleFunction) {
        case "mOSPlatform":
            osPlatform(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mOSCPU":
            osCPU(data, dBconfig).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mOSMemory":
            osMemory(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mPing":
            ping(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mOSHostname":
            osHostname(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mOSNetworkInterfaces":
            osNetworkInterfaces(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        default:
            reject(new Error('unknow funcition'));
            break;
    }
});

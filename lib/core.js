'use strict';
const ping = require('./actions/ping.js');
const osPlatform = require('./actions/osPlatform.js');

exports.run = (data) => new Promise((resolve, reject) => {
    switch (data.moduleFunction) {
        case "mOSPlatform":
            osPlatform(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mPing":
            ping(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        default:
            reject(new Error('unknow funcition'));
            break;
    }
});

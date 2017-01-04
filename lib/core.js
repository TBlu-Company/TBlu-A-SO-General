'use strict';
const ping = require('./actions/ping.js');
const soName = require('./actions/soName.js');
const soVersion = require('./actions/soVersion.js');
const soRelease = require('./actions/soRelease.js');
const soPlatform = require('./actions/soPlatform.js');

exports.run = (data) => new Promise((resolve, reject) => {
    switch (data.moduleFunction) {
        case "mSOName":
            soName(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mSOVersion":
            soVersion(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mSORelease":
            soRelease(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mSOPlatform":
            soPlatform(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        case "mPing":
            ping(data).then(result => resolve(result)).catch(error => reject(error));
            break;
        default:
            reject(new Error('unknow funcition'));
            break;
    }
});

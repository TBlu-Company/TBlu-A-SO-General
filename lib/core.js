'use strict';
const ping = require('./actions/ping.js');
const soName = require('./actions/soName.js');
const soVersion = require('./actions/soVersion.js');
const soRelease = require('./actions/soRelease.js');
const soPlatform = require('./actions/soPlatform.js');

exports.run = (data) => new Promise((resolve, reject) => {
    switch (data.moduleFunction) {
        case "mSOName":
            resolve(soName(data));
            break;
        case "mSOVersion":
            resolve(soVersion(data));
            break;
        case "mSORelease":
            resolve(soRelease(data));
            break;
        case "mSOPlatform":
            resolve(soPlatform(data));
            break;
        case "mPing":
            resolve(ping(data));
            break;
    }
});

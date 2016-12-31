'use strict';
const ping = require('./actions/ping.js');
const soName = require('./actions/soName.js');
const soVersion = require('./actions/soVersion.js');
const soRelease = require('./actions/soRelease.js');
const soPlatform = require('./actions/soPlatform.js');

exports.run = (data, callback) => {
    switch (data.moduleFunction) {
        case "mSOName":
            soName(data, callback);
            break;
        case "mSOVersion":
            soVersion(data, callback);
            break;
        case "mSORelease":
            soRelease(data, callback);
            break;
        case "mSOPlatform":
            soPlatform(data, callback);
            break;
        case "mPing":
            ping(data, callback);
            break;
    }
};

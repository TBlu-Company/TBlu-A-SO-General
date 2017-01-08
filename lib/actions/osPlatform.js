'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        gather['osPlatform'] = os.platform();
        gather['osArch'] = os.arch();
        resolve(gather);
    } catch (e) {
        reject(e);
    };
});

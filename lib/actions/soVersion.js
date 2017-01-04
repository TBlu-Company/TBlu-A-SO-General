'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        gather['osPlatform'] = os.version();
        resolve(gather);
    } catch (e) {
        reject(e);
    };
});

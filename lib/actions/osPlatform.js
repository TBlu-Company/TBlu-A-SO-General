'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        gather['platform'] = os.platform();
        gather['arch'] = os.arch();
        resolve(gather);
    } catch (e) {
        reject(e);
    };
});

'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        gather = JSON.stringify(os.networkInterfaces());
        resolve(gather);
    } catch (e) {
        reject(e);
    };
});
'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    let gather = {};
    gather['osPlatform'] = os.platform();
    resolve(gather);
});

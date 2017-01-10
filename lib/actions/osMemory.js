'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        gather['total'] = os.totalmem();
        gather['free'] = os.freemem();
        gather['used'] = os.totalmem() - os.freemem();
        gather['active'] = os.totalmem() - os.freemem();
        gather['available'] = os.freemem();
        resolve(gather);
    } catch (e) {
        reject(e);
    };
});

'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        gather['memory'] = {};
        gather['memory']['total'] = os.totalmem();
        gather['memory']['free'] = os.freemem();
        gather['memory']['used'] = os.totalmem() - os.freemem();
        gather['memory']['active'] = os.totalmem() - os.freemem();
        gather['memory']['available'] = os.freemem();
        resolve(gather);
    } catch (e) {
        reject(e);
    };
});

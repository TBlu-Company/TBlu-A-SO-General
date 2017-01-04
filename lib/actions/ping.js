'use strict';
const jjg = require('../utils/ping-system.js');

module.exports = (data) => new Promise((resolve, reject) => {
    try {
        let host = data.parameter.host;
        jjg.ping(host, (latency, status) => {
            let gather = {};
            if (status) {
                gather['latency'] = latency;
            } else {
                gather['msg'] = host + ' is unreachable.';
                gather['latency'] = -1;
            }
            resolve(gather);
        });
    } catch (e) {
        reject(e);
    };
});

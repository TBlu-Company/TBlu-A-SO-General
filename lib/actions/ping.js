'use strict';
const jjg = require('../utils/ping-system.js');

module.exports = (data, callback) => {
    let host = data.parameter.host;
    jjg.ping(host, (latency, status) => {
        if (status) {
            let restul = {};
            let gather = {};
            restul['status'] = status;
            gather['latency'] = latency;
            //gather['host'] = host;
            restul['gather'] = gather;
            callback(null, restul);
        } else {
            let restul = {};
            let gather = {};
            restul['status'] = status;
            gather['msg'] = host + ' is unreachable.';
            gather['latency'] = -1;
            //gather['host'] = host;
            restul['gather'] = gather;
            callback(host + ' is unreachable.', restul);
        }
    });
}

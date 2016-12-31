'use strict';
const os = require('os');
module.exports = (data, callback) => {
    let restul = {};
    let gather = {};
    restul['status'] = true;
    gather['osType'] = os.type();
    restul['gather'] = gather;
    callback(null, restul);
};

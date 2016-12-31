'use strict';
const os = require('os');
module.exports = (data, callback) => {
    let restul = {};
    let gather = {};
    restul['status'] = true;
    gather['osRelease'] = os.release();
    restul['gather'] = gather;
    callback(null, restul);
};

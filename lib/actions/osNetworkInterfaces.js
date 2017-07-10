'use strict';
const os = require('os');
module.exports = (data) => new Promise((resolve, reject) => {
  try {
    let gather = [];
    let tmp = os.networkInterfaces();
    for (let e in tmp) {
      tmp[e].map(k => {
        k['iface'] = e;
        gather.push(k);
      })
    }
    resolve(gather);
  } catch (e) {
    reject(e);
  };
});

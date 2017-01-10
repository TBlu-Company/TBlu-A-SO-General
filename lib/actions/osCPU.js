'use strict';
const os = require('os');
const calculaCore = (newCore, oldCore, index) => new Promise((resolve, reject) => {
    if (typeof oldCore == 'undefined') {
        oldCore = {
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
            },
            totalTimes: 0,
        };
    };
    let totalN = newCore.times.user + newCore.times.nice + newCore.times.sys + newCore.times.idle + newCore.times.irq;
    let userAvg = newCore.times.user - oldCore.times.user;
    let niceAvg = newCore.times.nice - oldCore.times.nice;
    let sysAvg = newCore.times.sys - oldCore.times.sys;
    let idleAvg = newCore.times.idle - oldCore.times.idle;
    let irqAvg = newCore.times.irq - oldCore.times.irq;
    let totalAvg = totalN - oldCore.totalTimes;

    let userPerc = ((userAvg * 100) / totalAvg).toFixed(3);
    let nicePerc = ((niceAvg * 100) / totalAvg).toFixed(3);
    let sysPerc = ((sysAvg * 100) / totalAvg).toFixed(3);
    let idlePerc = ((idleAvg * 100) / totalAvg).toFixed(3);
    let irqPerc = ((irqAvg * 100) / totalAvg).toFixed(3);

    let result = {
        cpu: index,
        times: {
            user: newCore.times.user,
            nice: newCore.times.nice,
            sys: newCore.times.sys,
            idle: newCore.times.idle,
            irq: newCore.times.irq
        },
        avg: {
            user: userPerc,
            nice: nicePerc,
            sys: sysPerc,
            idle: idlePerc,
            irq: irqPerc
        },
        totalTimes: totalN
    };
    resolve(result);
});

const calculaCPU = (newCPU, oldCPU) => new Promise((resolve, reject) => {
    let actions = [];
    newCPU.forEach((e, i) => {
        actions.push(calculaCore(e, oldCPU[i], i));
    });
    let results = Promise.all(actions);
    results.then(result => resolve(result)).catch(error => reject(error));

});
module.exports = (data, dBconfig) => new Promise((resolve, reject) => {
    try {
        let gather = {};
        let query = {
            name: "osCPU"
        };
        dBconfig.findOne(query).exec(function(err, oldCPU) {
            if (err) {
                reject(err);
            } else {
                if (oldCPU == null) {
                    oldCPU = {};
                    oldCPU['value'] = [];
                }
                let newCPU = os.cpus();
                calculaCPU(newCPU, oldCPU.value).then(result => {
                    gather['osCPU'] = result;
                    let update = {
                        name: "osCPU",
                        value: result
                    };
                    let options = {
                        upsert: true
                    };
                    dBconfig.update(query, update, options, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(gather);
                        }
                    });
                }).catch(error => reject(error));
            };
        });
    } catch (e) {
        reject(e);
    };
});

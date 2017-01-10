'use strict';
const Datastore = require('nedb');
const path = require('path');
const dirname = path.dirname(__filename);
const dBconfig = new Datastore(dirname + '/config.db');
dBconfig.loadDatabase();
const core = require('../index.js');

describe('mSOPlatform', function() {
    it('get mSOPlatform', function(done) {
        let data = {};
        data['moduleFunction'] = "mOSPlatform";
        core.run(data).then(result => {
            console.log(result);
            done();
        }).catch(error => {
            done(error);
        });
    });
});

describe('mOSCPU', function() {
    it('get mOSCPU', function(done) {
        let data = {};
        data['moduleFunction'] = "mOSCPU";
        core.run(data, dBconfig).then(result => {
            console.log(JSON.stringify(result));
            done();
        }).catch(error => {
            done(error);
        });
    });
});

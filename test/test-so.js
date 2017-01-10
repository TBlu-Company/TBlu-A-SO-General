'use strict';

const core = require('../index.js');

describe('mOSPlatform', function() {
    it('get mOSPlatform', function(done) {
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

describe('mOSHostname', function() {
    it('get mOSHostname', function(done) {
        let data = {};
        data['moduleFunction'] = "mOSHostname";
        core.run(data).then(result => {
            console.log(result);
            done();
        }).catch(error => {
            done(error);
        });
    });
});

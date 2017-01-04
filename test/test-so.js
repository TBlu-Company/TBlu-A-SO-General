'use strict';

const core = require('../index.js');

describe('mSOName', function() {
    it('get mSOName', function(done) {
        let data = {};
        data['moduleFunction'] = "mSOName";
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

describe('mSORelease', function() {
    it('get mSORelease', function(done) {
        let data = {};
        data['moduleFunction'] = "mSORelease";
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

describe('mSOPlatform', function() {
    it('get mSOPlatform', function(done) {
        let data = {};
        data['moduleFunction'] = "mSOPlatform";
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

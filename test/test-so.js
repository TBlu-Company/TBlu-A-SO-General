'use strict';

const core = require('../index.js');

describe('mSOName', function() {
    it('get mSOName', function(done) {

        let data = {};
        data['moduleFunction'] = "mSOName";
        core.run(data, function(err, data) {
            if (err) {
                throw new Error(err);
            } else {
                console.log(data)
                done();
            }
        });
    });
});

describe('mSOVersion', function() {
    it('get mSOVersion', function(done) {

        let data = {};
        data['moduleFunction'] = "mSOVersion";
        core.run(data, function(err, data) {
            if (err) {
                throw new Error(err);
            } else {
                console.log(data)
                done();
            }
        });
    });
});

describe('mSOPlatform', function() {
    it('get mSOPlatform', function(done) {

        let data = {};
        data['moduleFunction'] = "mSOPlatform";
        core.run(data, function(err, data) {
            if (err) {
                throw new Error(err);
            } else {
                console.log(data)
                done();
            }
        });
    });
});

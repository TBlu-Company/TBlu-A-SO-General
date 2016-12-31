'use strict';

const core = require('../index.js');

describe('ping - localhost', function() {
    it('try - localhost', function(done) {

        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: 'localhost'
        };
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


describe('ping - localhost', function() {
    it('try - localhost', function(done) {
        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: '127.0.0.0'
        };
        core.run(data, function(err, data) {
            if (err) {
                console.log(data);
                done()
            } else {
                throw new Error(err);
            }
        });
    });
});


describe('ping - google', function() {
    it('try - google', function(done) {
        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: 'google.com.br'
        };
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

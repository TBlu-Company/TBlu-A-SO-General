'use strict';

const core = require('../index.js');

describe('mPing', function() {
    it('try - 127.0.0.1', function(done) {
        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: '127.0.0.1'
        };
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

describe('mPing', function() {
    it('try - unknow host', function(done) {
        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: '127.0.0.0'
        };
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

describe('mPing', function() {
    it('try - DNS - localhost', function(done) {
        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: 'localhost'
        };
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

describe('mPing', function() {
    it('try - DNS - External Host', function(done) {
        let data = {};
        data['moduleFunction'] = "mPing";
        data['parameter'] = {
            host: 'google.com.br'
        };
        core.run(data).then(result => {
            done();
        }).catch(error => {
            done(error);
        });
    });
});

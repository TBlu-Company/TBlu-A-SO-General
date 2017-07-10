'use strict';
const Datastore = require('nedb');
const path = require('path');
const dirname = path.dirname(__filename);
const dBconfig = new Datastore(dirname + '/config.db');
dBconfig.loadDatabase();
const core = require('../index.js');

describe('mOSPlatform', function() {
  it('get mOSPlatform', function(done) {
    let data = {};
    data['moduleFunction'] = "mOSPlatform";
    core.run(data).then(result => {
      // console.log(result);
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
      // console.log(result);
      done();
    }).catch(error => {
      done(error);
    });
  });
});



describe('mOSNetworkInterfaces', function() {
  it('get mOSNetworkInterfaces', function(done) {
    let data = {};
    data['moduleFunction'] = "mOSNetworkInterfaces";
    core.run(data).then(result => {
      // console.log(result);
      done();
    }).catch(error => {
      done(error);
    });
  });
});

'use strict';

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

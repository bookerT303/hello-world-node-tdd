//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var assert = require('chai').assert;
var superagent = require('superagent');

var server = require('../src/helloWorld');


describe('server', function() {

    it('should return Hello World at /', function( done ) {

        superagent.get('http://localhost:3000/').end(function(err, res) {
            if (err) { return done(err); }

            assert.equal(res.status, 200);
            assert.equal(res.text, 'Hello World');
            done();
        });

    });

    it('should return a 404 at /foo', function( done ) {

        superagent.get('http://localhost:3000/foo').end(function(err, res) {
            if (err) {
                assert.equal(err.message, 'Not Found');
                assert.equal(res.status, 404);
                assert.equal(res.text, 'Not Found');
                return done();
            }

            done(new Error('Request to /foo should have failed'));
        });

    });
});

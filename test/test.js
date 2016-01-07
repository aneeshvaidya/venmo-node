var assert = require('assert');
var Venmo = require('../venmo');

// Uncomment this line to use your keys.
var API_KEY = require('./config').API_KEY;
var venmo = new Venmo(API_KEY);


describe("Users Endpoints", function(){
    it("gets the current user", function(done){
        venmo.getCurrentUser(function(err, res){
            //console.log(res.body);
            assert.notEqual(undefined, res.body);
            assert(res.body.hasOwnProperty('data'));
            done();
        });
    });
    it("gets a user by id", function(done){
        venmo.getUserById('1377162925965312682', function(err, res){
            //console.log(res.body);
            assert.notEqual(undefined, res.body);
            assert(res.body.hasOwnProperty('data'));
            done();
        });
    });
    it("gets a user's friends", function(done){
        var params = {};
        venmo.getUserFriends('1377162925965312682', params, function(err, res){
            //console.log(res.body);
            assert.notEqual(undefined, res.body);
            done();
        });
    });
});


describe("Payments Endpoints", function(){
    it("sends a payment");
    it("accepts a charge");
    it("creates a charge");
    it("gets recent payments");
    it("gets a payment by id");
});

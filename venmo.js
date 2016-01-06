/**
 * Venmo API for node.js
 * Supports Users and Payments Endpoints
 *
 */ 

var request = require('superagent');
var base_url = 'https://api.venmo.com/v1';

function Venmo(client_id){
    this.client_id = client_id;
}


Venmo.prototype.getCurrentUser = function(callback){
    return request
        .get(base_url + '/me')
        .query({access_token : this.client_id})
        .end(callback);
};

Venmo.prototype.getUserById = function(user_id, callback){
    return request
        .get(base_url + '/users/' + user_id)
        .query({access_token : this.client_id})
        .end(callback);
};

Venmo.prototype.getUserFriends = function(user_id, params, callback){
    return request
        .get(base_url + '/users/' + user_id + '/friends')
        .query({access_token : this.client_id})
        .query(params)
        .end(callback);
};

Venmo.prototype.sendPayment = function(params, callback){
    params.access_token = this.client_id;
    return request
        .post(base_url + '/payments')
        .send(params)
        .end(callback);
};

Venmo.prototype.acceptCharge = function(payment_id, params, callback){
    params.access_token = this.client_id;
    return request
        .put(base_url + '/payments/' + payment_id)
        .send(params)
        .end(callback);
};

Venmo.prototype.createCharge = function(params, callback){
    return this.sendPayment(params, callback);
};

Venmo.prototype.getRecentPayments = function(params, callback){
    params.access_token = this.client_id;
    return request
        .get(base_url + '/payments')
        .query(params)
        .end(callback);
};

Venmo.prototype.getPaymentById = function(payment_id, params, callback){
    params.access_toekn = this.client_id;
    return request
        .get(base_url + '/payments/' + payment_id)
        .query(params)
        .end(callback);
};


module.exports = Venmo;

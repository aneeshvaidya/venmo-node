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

Venmo.prototype.getCurrentUser = function(){};

Venmo.prototype.getUserById = function(){};

Venmo.prototype.getUserFriends = function(){};

Venmo.prototype.sendPayment = function(){};

Venmo.prototype.createCharge = function(){};

Venmo.prototype.getRecentPayments = function(){};

Venmo.prototype.getPaymentById = function(){};

Venmo.prototype.acceptCharge = function(){};



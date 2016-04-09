'use strict';

var request = require('request');

module.exports.data = function(context, callback){
  request({
    url: 'https://raw.githubusercontent.com/opentable/oc/master/package.json',
    json: true,
    timeout: 2000
  }, function(err, res, body){
    if(err){ return callback(null, { error: true }); }

    callback(null, { version: body.version });
  });
};
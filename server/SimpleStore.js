var util = require('util');

function SimpleStore(){
  this.hash = {};
}

SimpleStore.prototype.set = function(key, value){
  this.hash[key] = value;
};

SimpleStore.prototype.get = function (key){
  return this.hash.key;
};

SimpleStore.prototype.getAll = function (){
  return this.hash;
};

module.exports = SimpleStore;

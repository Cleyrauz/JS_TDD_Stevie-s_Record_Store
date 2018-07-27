const _ = require("lodash");

const RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype.addRecordToInventory = function(record){
  this.inventory.push(record);
}

module.exports = RecordStore;

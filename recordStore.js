const _ = require("lodash");

const RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
};

RecordStore.prototype.addRecordToInventory = function(record){
  this.inventory.push(record);
};

// RecordStore.prototype.listsInventory = function(){
//
// }

RecordStore.prototype.sellRecord = function(record){
  this.balance += record.price;
  var i = this.inventory.indexOf(record);
  this.inventory.splice(i, 1);
}

RecordStore.prototype.financialReport = function(){
  return `there are ${this.inventory.length} records on the shop and $${this.balance} of balance`;
}

RecordStore.prototype.recordsByGenre = function(genre){
  return _.filter(this.inventory, ['genre', genre]);
}

module.exports = RecordStore;

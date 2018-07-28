const _ = require("lodash");

const Customer = function(name, pocket_money){
  this.name = name;
  this.pocket_money = pocket_money;
  this.collection = [];
}

Customer.prototype.buyRecord = function(recordStore, record) {
  if(this.pocket_money >= record.price){
    recordStore.sellRecord(record)
      this.pocket_money -= record.price;
      this.collection.push(record);
  } else {
    "The customer can't afford this record"
  }
};

module.exports = Customer;

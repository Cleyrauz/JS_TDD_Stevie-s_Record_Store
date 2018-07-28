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

// The reduce() method applies a function against an accumulator and each element
// in the array (from left to right) to reduce it to a single value.
Customer.prototype.valueOfCollection = function(){
  return _.reduce(this.collection, function(accumulator, record){
    return accumulator + record.price;
  }, 0)
};

Customer.prototype.valueOfCollectionByGenre = function(genre){
let result = [];
result = _.filter(this.collection, ['genre', genre]);
return result.reduce(function(accumulator, record){
  return accumulator + record.price;
}, 0)
};

Customer.prototype.mostValuableRecord = function(){
  return _.maxBy(this.collection, 'price');
};

Customer.prototype.sortByValue = function(){
  return _.sortBy(this.collection, 'price');
};

Customer.prototype.compareCollections = function(customer){
  return `Compare the value of collections: ${this.name} => $${this.valueOfCollection()} and ${customer.name} => $${customer.valueOfCollection()}`
}

module.exports = Customer;

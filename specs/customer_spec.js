const assert = require("assert");
const RecordStore = require("../recordStore");
const Record = require("../record");
const Customer = require("../customer");

describe("Customer", function(){
  let customer1, record1, recordStore;

  beforeEach(function(){
    customer1 = new Customer("Cleyra", 20);
    record1 = new Record("Natalia Oreiro", "Me muero de amor", "latin pop", 10);
    record2 = new Record("Monsieur Periné", "Encanto tropical", "pop", 20);
    recordStore = new RecordStore("Stevie's Record Store", "Glasgow");
  });

it('should have a name', function(){
  assert.strictEqual("Cleyra", customer1.name);
})

it('should have pocket money', function(){
  assert.strictEqual(20, customer1.pocket_money);
})

it("should be able to buy record from store", function(){
  recordStore.addRecordToInventory(record1);
  recordStore.addRecordToInventory(record2);
  customer1.buyRecord(recordStore, record1);
  assert.deepStrictEqual(10, customer1.pocket_money);
  assert.deepStrictEqual(10, recordStore.balance);
  assert.deepStrictEqual(1, customer1.collection.length);
  assert.deepStrictEqual(1, recordStore.inventory.length);
})


});

const assert = require("assert");
const RecordStore = require("../recordStore");
const Record = require("../record");

describe("RecordStore", function(){
  let recordStore, record1, record2, record3, record4;

  beforeEach(function(){
    recordStore = new RecordStore("Stevie's Record Store", "Glasgow");
    record1 = new Record("Natalia Oreiro", "Me muero de amor", "latin pop", 10);
    record2 = new Record("Monsieur Periné", "Encanto tropical", "pop", 20);
    record3 = new Record("Fito Paez", "Euforia", "rock", 15);
    record4 = new Record("Soda Stereo", "Cancion animal", "rock", 25);
  });

  it("should have a name", function(){
    assert.strictEqual("Stevie's Record Store", recordStore.name);
  })

  it("should have a city", function(){
    assert.strictEqual("Glasgow", recordStore.city);
  })

  it("the balance should starts in cero", function(){
    assert.strictEqual(0, recordStore.balance);
  })

  it("should add a record to the record store", function(){
    recordStore.addRecordToInventory(record1);
    assert.deepStrictEqual(1, recordStore.inventory.length);
  })

});

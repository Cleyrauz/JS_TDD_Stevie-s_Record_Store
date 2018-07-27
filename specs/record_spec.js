const assert = require("assert");
const Record = require("../record");

describe("Record", function(){
  let record1, record2, record3, record4;

  beforeEach(function(){
    record1 = new Record("Natalia Oreiro", "Me muero de amor", "latin pop", 10);
    record2 = new Record("Monsieur Periné", "Encanto tropical", "pop", 20);
    record3 = new Record("Fito Paez", "Euforia", "rock", 15);
    record4 = new Record("Soda Stereo", "Cancion animal", "rock", 25);
  });

  it("should have an artist", function(){
    assert.strictEqual("Natalia Oreiro", record1.artist);
  })

  it("should have a title", function(){
    assert.strictEqual("Cancion animal", record4.title);
  })

  it("should have a genre", function(){
    assert.strictEqual("rock", record3.genre);
  })

  it("should have a price", function(){
    assert.strictEqual(20, record2.price);
  })

});

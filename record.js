const _ = require("lodash");

const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printProperties = function(){
// return _.chain(this).values().join(", ").value();
return result = _.map(this, function(value, key) {
return key + ", " + value;
});
}

// Record.prototype.listsInventory = function(){
//
// }


module.exports = Record;


// function prueba(){
//     function ale(){
//         alert('alerta!!');
//     }
// }
//
// ale();

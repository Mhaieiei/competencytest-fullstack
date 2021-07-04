const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create Schema
/**
 * {
_id: “abcd1234”,
uid: "b72fcca0-0e3c-4af8-957d-140c884a68b7", brand: "Dos Equis",
name: "Schneider Aventinus",
style: "Light Lager",
hop: "Warrior",
yeast: "1007 - German Ale", malts: "Caramel",
ibu: "57 IBU",
alcohol: "9.5%",
blg: “8.2°Blg”, randomCount: 0
}
 */
const beerSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  hop: {
    type: String,
    required: true,
  },
  yeast: {
    type: String,
    required: true,
  },
  ibu: {
    type: String,
    required: true,
  },
  alcohol: {
    type: String,
    required: true,
  },
  blg: {
    type: String,
    required: true,
  },
  randomCount: {
    type: Number,
    required: true,
  },
});
module.exports = beer = mongoose.model("beer", beerSchema);

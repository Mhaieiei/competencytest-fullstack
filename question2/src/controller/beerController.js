const beerModel = require("../model/beerSchema");
const getRandomBeer = async (req, res) => {
  try {
    const countNumber = await beerModel.countDocuments(); // Get the count of all users
    const randomNumber = Math.floor(Math.random() * countNumber); // Get random number
    const randomBeer = await beerModel.findOne().skip(randomNumber);
    await randomBeer.update({ $inc: { randomCount: 1 } });
    res.send(randomBeer);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong, please try again later",
    });
  }
};

const createBeer = async (req, res) => {
  try {
    const { uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg } =
      req.body;
    const requestData = {
      uid,
      brand,
      name,
      style,
      hop,
      yeast,
      malts,
      ibu,
      alcohol,
      blg,
      randomCount: 0,
    };
    await new beerModel(requestData).save();
    res.send("create success");
  } catch (err) {
    res.status(500).send({
      message: "Something went wrong, please try again later",
      details: err.message,
    });
  }
};

module.exports = { getRandomBeer, createBeer };

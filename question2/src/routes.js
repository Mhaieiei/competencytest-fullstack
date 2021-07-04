// Controllers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const beerController = require("./controller/beerController");
const validate = require("./validator/requestBody");

module.exports = (app) => {
  // Routes+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  app.get("/beer/random", beerController.getRandomBeer);
  app.post("/beer", validate.validateCreate, beerController.createBeer);
};

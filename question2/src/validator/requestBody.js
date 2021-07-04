const validateCreate = async (req, res, next) => {
  if (!req.body) return res.status(400).send("request body is missing");
  const { uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg } =
    req.body;
  if (
    !(
      uid &&
      brand &&
      name &&
      style &&
      hop &&
      yeast &&
      malts &&
      ibu &&
      alcohol &&
      blg
    )
  )
    return res.status(400).send("parameters are invalid/missing");
  next();
};

module.exports = { validateCreate };

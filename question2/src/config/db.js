const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    const db = process.env.MONGODB_URL;
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    // Exit process
    process.exit(1);
  }
};

module.exports = connectDB;

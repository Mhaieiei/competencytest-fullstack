const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect database
connectDB();

//Innit Middleware
app.use(express.json({ extended: false }));

// Define Routes
require("./routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

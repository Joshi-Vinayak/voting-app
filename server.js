const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const bodyparser = require("body-parser");
app.use(bodyparser.json()); //req.body
const PORT = process.env.PORT || 3000;

//import the router files
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

//use the user routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(PORT, () => {
  console.log("server running on port 3000");
});

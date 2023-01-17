//requirements
const express = require("express");
const mongoose = require("mongoose");
const serverRoutes = require("./routes/serverRoutes");
const port = 80;

//calling upon express with app
const app = express();

//middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// Routes
app.use(serverRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
//requirements
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const serverRoutes = require("./routes/serverRoutes");
const authRoutes = require("./routes/authRoutes");
const port = 80;

//calling upon express with app
const app = express();

//middleware
app.use(express.static("public")); //so we can send static files like css to browser, automatically sends to public folder

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = process.env.host
mongoose.set("strictQuery", false);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true}); //these object options help prevent deprications

// Routes
app.use(serverRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
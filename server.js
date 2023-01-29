//requirements
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const serverRoutes = require("./routes/serverRoutes");
const authRoutes = require("./routes/authRoutes");
const nodemailer = require("nodemailer");
const port = 80;
const cookieParser = require("cookie-parser");
const {requireAuth, checkUser} = require("./middleware/authMiddleware");
const {forgotpass_post} = require("./controllers/serverController");

//calling upon express with app
const app = express();



//middleware
app.use(express.static("public")); //so we can send static files like css to browser, automatically sends to public folder
app.use(express.json()); //takes any json data from requests, and parses it into a js code
app.use(cookieParser()) // we can access cookie objects

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = process.env.host
mongoose.set("strictQuery", false);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true}); //these object options help prevent deprications



// Routes
app.get("*", checkUser); // * means every route
app.use(serverRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
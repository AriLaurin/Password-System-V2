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

// database connection
const dbURI = process.env.host
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Routes
app.use(serverRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
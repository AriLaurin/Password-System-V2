//Seperate file to put our routes for the server page links
//we need to require the router from express package, export it once routes have been attached, then plug it in to the server.js
const { Router } = require("express");
const serverController = require("../controllers/serverController");
const {requireAuth} = require("../middleware/authMiddleware");

const router = Router(); // creating a new instance of the router, attach different requests to this

router.get("/", serverController.index_get); //this will send the root view file (index)
router.get("/content", requireAuth, serverController.content_get);

module.exports = router; //we export all the handlers of router into server so we can use these routes

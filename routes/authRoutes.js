const { Router } = require("express");
const authController = require("../controllers/authController");

const authRouter = Router();  // creating a new instance of the router, attach different requests to this

authRouter.get("/login", authController.login_get);
authRouter.post("/login", authController.login_post);

authRouter.get("/signup", authController.signup_get);
authRouter.post("/signup", authController.signup_post);

authRouter.get("/newpass", authController.newpass_get);
authRouter.post("/newpass", authController.newpass_post);

module.exports = authRouter; //we export all the handlers of router into server so we can use these routes
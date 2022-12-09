const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();

//const { login } = require("app/middlewares/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );



  app.post("/admin/login", controller.login);

  //app.post("/api/auth/signin", controller.signin);


  app.post("/api/auth/signout", controller.signout);

//router.route("/login").post(login);
module.exports = router;
};

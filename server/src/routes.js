const AuthenticationController = require("./controllers/AuthenticationController");
const SongsController = require("./controllers/SongsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
// this is useful method so your controllers are defined to write the function
// and your routes showq you the end point

module.exports = app => {
  app.post(
    "/register",
    // call this policy as a middleware function before it hits our function
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);
  app.get("/songs", SongsController.index);
  app.post("/songs", SongsController.post);
};

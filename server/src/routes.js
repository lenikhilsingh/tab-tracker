const AuthenticationController = require("./controllers/AuthenticationController");
const SongsController = require("./controllers/SongsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const BookmarksController = require("./controllers/BookmarksController");
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
  app.get("/songs/:songId", SongsController.show);
  app.post("/songs", SongsController.post);
  app.put("/songs/:songId", SongsController.put);
  app.get("/bookmarks", BookmarksController.index);
  app.post("/bookmarks", BookmarksController.post);
  app.delete("/bookmarks/:bookmarkId", BookmarksController.remove);
};

const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
// require("jsdoc");

// ggkhfkhkfhkfhh
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

// controller is basically where you have all your end points defined
module.exports = {
  async register(req, res) {
    try {
      //  The await keyword saves us from having to write a .then() block.
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (err) {
      res.status(400).send({
        error: "this email id is already in used "
      });
    }
    // res.send({});
  },
  async login(req, res) {
    try {
      //  The await keyword saves us from having to write a .then() block.
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          emailid: email
        }
      });
      if (!user) {
        res.status(403).send({
          error: "The login information is incorrect"
        });
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: "you may have entered the wrong password"
        });
      }
      const userJson = user.toJSON();
      //    console.log(userJson);
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to login."
      });
    }
  }
};

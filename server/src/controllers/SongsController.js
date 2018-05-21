const { Song } = require("../models");

// controller is basically where you have all your end points defined
module.exports = {
  // index method which finds all of the songs in the database aqnd return 10 of them to be fed to our UI
  async index(req, res) {
    try {
      const songs = await Song.findAll({ limit: 10 });
      res.send(songs);
    } catch (err) {
      console.log("error has occured \n", err);
      res.status(500).send({
        error: "An error has occurred trying to fetch the songs ."
      });
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      console.log("error has occured \n", err);
      res.status(500).send({
        error: "An error has occurred trying to create the song."
      });
    }
  }
};

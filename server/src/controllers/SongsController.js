const { Song } = require("../models");

// controller is basically where you have all your end points defined
module.exports = {
  // index method which finds all of the songs in the database aqnd return 10 of them to be fed to our UI
  async index(req, res) {
    try {
      let songs = null;
      const search = req.query.search;
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: ["title", "artist", "genre", "album"].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        });
      } else {
        songs = await Song.findAll({ limit: 10 });
      }
      res.send(songs);
    } catch (err) {
      console.log("error has occured \n", err);
      res.status(500).send({
        error: "An error has occurred trying to fetch the songs ."
      });
    }
  },
  async show(req, res) {
    try {
      const songs = await Song.findById(req.params.songId);
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
  },
  async put(req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to update the song"
      });
    }
  }
};

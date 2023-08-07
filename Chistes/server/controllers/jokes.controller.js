const mongoose = require("mongoose");
const JokeModel = require("../models/jokes.models");

module.exports = {
  getAllJokes: (req, res) => {
    JokeModel.find({})
      .then((jokes) => {
        res.json({ data: jokes });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  getOneJoke: (req, res) => {
    const id = req.params.id;
    JokeModel.findById(id)
      .then((joke) => {
        if (!joke) {
          res.status(404).json({ message: "Joke not found" });
        } else {
          res.json({ data: joke });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  createJoke: (req, res) => {
    const data = req.body;
    JokeModel.create(data)
      .then((joke) => {
        res.json({ data: joke });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  updateJoke: (req, res) => {
    const id = req.params.id;
    const updatedJoke = req.body;

    JokeModel.findByIdAndUpdate(id, updatedJoke, { new: true })
      .then((updatedJoke) => {
        res.json({ data: updatedJoke });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },

  deleteJoke: (req, res) => {
    const id = req.params.id;
    JokeModel.findByIdAndDelete(id)
      .then(() => {
        res.json({ success: true });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },
};

const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "The joke needs a setup"],
    minLength: [10, "Joke setup should have at least 10 characters"],
    maxLength: [300, "Joke setup should have max 300 characters"],
  },
  punchline: {
    type: String,
    required: [true, "The joke needs a punchline"],
    minLength: [3, "Joke punchline should have at least 3 characters"],
    maxLength: [100, "Joke punchline should have max 100 characters"],
  },
}, {
  timestamps: true,
});

const JokeModel = mongoose.model("Jokes", JokeSchema);

module.exports = JokeModel;

const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const TeamSchema = new Schema({
  teamName: {
    type: String,
  },
  city: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: Number,
  },
  captain:  {
    type: String,
  },
  Vicecaptain: {
    type: String,
  },
  owner: {
    type: String,
  },
  players: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Player",
    },
  ],
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;

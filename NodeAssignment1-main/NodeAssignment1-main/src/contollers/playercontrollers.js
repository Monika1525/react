const Player = require("../models/playermodels");
const Team = require("../models/teammodels");
const createPlayer = async (req, res) => {
  const player = req.body;
  console.log(player);
  const response = await Player.create(player);

  res.json({ Message: response });
};

const getAllPlayer = async (req, res) => {
  const response = await Player.find();

  res.json({ Message: response });
};

const getPlayerDetail = async (req, res) => {
  try {
    const response = await Player.findById(req.params.playerId);

    if (response) {
      res.json({
        Message: response,
      });
    } else {
      res.json({
        Message: "Player Id is not correct",
      });
    }
  } catch (error) {
    res.json({
      Message: "Internal Server Error",
    });
  }
};

const updatePlayerDetail = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);

    if (player) {
      player.age = req.body.age || player.age;
      player.totalMatches = req.body.totalMatches || player.totalMatches;
      player.money = req.body.money || player.money;

      await player.save(); // update and save the player info in db.

      res.json({ Messgae: player });
    } else {
      res.json({ Message: "Player Id is not found" });
    }
  } catch (error) {
    res.json({ Message: "Internal Server Error" });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);

    if (player) {
      const player = await Player.deleteOne({ _id: req.params.playerId });

      res.json({ Message: player });
    } else {
      res.json({ Message: "Player Id is not found" });
    }
  } catch (error) {
    res.json({ Message: "Internal Server Error" });
  }
};

const addPlayer = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);

    if (team) {
      const player = await Player.findById(req.params.playerId);
      if (player) {
        team.players.push(player._id);
        await team.save();
        res.json({ Messages: "Ok" });
      } else {
        res.json({ Message: " Team is correct but Player id not found" });
      }
    } else {
      res.json({ Message: "Team id not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ Message: "Internal Server error" });
  }
};

module.exports = {
  createPlayer,
  getAllPlayer,
  getPlayerDetail,
  updatePlayerDetail,
  deletePlayer,
  addPlayer,
};

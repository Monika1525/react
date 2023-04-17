const Team = require("../models/teammodels");
const Player = require("../models/playermodels");
const teamTest = async (req, res) => {
  res.json({ Message: "This is a test message from team" });
};

const createTeam = async (req, res) => {
  const team = req.body;

  const response = await Team.create(team);

  res.json({
    message: response,
  });
};

const getAllTeams = async (req, res) => {
  const response = await Team.find().populate("players");

  res.json({
    message: response,
  });
};

const getATeam = async (req, res) => {
  const teamId = req.params.teamId;

  const response = await Team.findById(teamId);

  res.json({
    message: response,
  });
};

const getTeamWithID = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId).populate("players");

    if (team) {
      res.json({ Messgae: team });
    } else {
      res.json({ message: "team id not correct" });
    }
  } catch (error) {}
};

const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (team) {
      const team = await Team.deleteOne({ _id: req.params.teamId });
      res.json({ Message: team });
    } else {
      res.json({ message: "Team Id is not found" });
    }
  } catch {
    res.json({ message: "Internal Server Error" });
  }
};

const UpdateTeaminfo = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (team) {
      team.city = req.body.city || team.city;
      team.owner = req.body.owner || team.owner;
      team.color = req.body.color || team.color;
      await team.save();
      res.json({ message: team });
    } else {
      res.json({ message: "Team Id not Found" });
    }
  } catch {
    res.json({ message: "Internal Server Error" });
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
/**
 * req.body
 * req.params
 * req.query
 */

module.exports = {
  teamTest,
  createTeam,
  getAllTeams,
  getATeam,
  getTeamWithID,
  deleteTeam,
  UpdateTeaminfo,
  addPlayer,
};

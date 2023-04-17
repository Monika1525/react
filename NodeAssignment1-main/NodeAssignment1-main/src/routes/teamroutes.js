const express = require("express");
const TeamController = require("../contollers/Teamcontrollers");

const TeamRouter = express.Router();

TeamRouter.post("/team", TeamController.createTeam);

TeamRouter.get("/team", TeamController.getAllTeams);

TeamRouter.get("/team/:teamId", TeamController.getATeam);

TeamRouter.get("/detail/:teamId", TeamController.getTeamWithID);

TeamRouter.delete("/team/:teamId", TeamController.deleteTeam);

TeamRouter.patch("/team/:teamId", TeamController.UpdateTeaminfo);

TeamRouter.patch("/team/:teamId/player/:playerId", TeamController.addPlayer);

module.exports = TeamRouter;

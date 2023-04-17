const express = require("express");

const PlayerController = require("../contollers/playercontrollers");

const playerRouter = express.Router();

playerRouter.post("/player", PlayerController.createPlayer);

playerRouter.get("/player", PlayerController.getAllPlayer);

playerRouter.get("/player/:playerId", PlayerController.getPlayerDetail);

playerRouter.patch("/player/:playerId", PlayerController.updatePlayerDetail);

playerRouter.delete("/player/:playerId", PlayerController.deletePlayer);

playerRouter.patch(
  "/team/:teamId/player/:playerId",
  PlayerController.addPlayer
);

module.exports = playerRouter;

const express = require("express");
const bodyParser = require("body-parser");
const db_connection = require("./src/config/db.config");
const TeamRouter = require("./src/routes/teamroutes");
const PlayerRouter = require("./src/routes/playerroutes");
const app = express();
app.use(bodyParser.json());

app.use(TeamRouter);
app.use(PlayerRouter);

app.listen(3000, async () => {
  console.log("server listening on port 3000");
  await db_connection();
});

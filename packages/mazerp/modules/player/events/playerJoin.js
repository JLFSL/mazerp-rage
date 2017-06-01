const functions = require("../../../functions"),
      framework = require("../../../"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerJoin",
        execute: (player) => {
            logger.log("debug", `Player ${player.name} joined, IP: ${player.ip}.`);

            // This will be the login page in the future.
            player.sendMessage("SERVER: Welcome to MazeRP! You must login with your forum account to continue.");
            player.setDimension(variables.dimensions.public); // for testing purposes

            variables.PlayerInfo[player.player.id] = player;
            //player.player.call("authenticationShow");
        }
    }
};
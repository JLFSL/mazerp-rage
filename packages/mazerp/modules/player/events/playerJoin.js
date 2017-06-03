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

            // Show our UI
            player.player.call("showUI");

            // Open our login
            player.player.call("openMenu", "/login");
            player.setDimension(variables.dimensions.noLogin); // for testing purposes

            variables.PlayerInfo[player.player.id] = player;
        }
    }
};
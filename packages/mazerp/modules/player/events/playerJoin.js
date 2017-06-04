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
            player.setDimension(variables.dimensions.noLogin);

            // Add the current player to our array
            // REMINDER: remove on disconnect
            variables.PlayerInfo.push(player);
        }
    }
};
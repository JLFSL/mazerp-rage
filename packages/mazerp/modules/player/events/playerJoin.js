const functions = require("../../../functions"),
      framework = require("../../../"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");
      ppplayer = require("../../../classes/Player");

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

            // ISSUE: only shows last shown menu
            player.player.call("openMenu", "/status");

            variables.PlayerInfo.push(player);
        }
    }
};
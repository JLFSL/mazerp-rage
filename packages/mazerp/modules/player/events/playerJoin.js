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
            player.sendMessage("SERVER: Welcome! You must /login to continue.");
        }
    }
};
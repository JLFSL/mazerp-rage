const functions = require("../../../functions"),
      framework = require("../../../"),
      logger = framework.logger,
      variables = framework.variables;

module.exports = {
    event: {
        name: "playerJoin",
        execute: (player) => {
            logger.log("debug", `${player.name} joined, IP: ${player.ip}.`);

            // This will be loaded from the database in the future
            var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];
            player.spawn(spawn.position);
            player.heading = spawn.heading;
            // As not logged in players shouldn't be able to perform any actions in the world.
            player.dimension = variables.dimensions.noLogin;

            functions.sendPlayerMessage(player, "SERVER: Please login with your forum's login details. (/login [email] [password])");
        }
    }
};
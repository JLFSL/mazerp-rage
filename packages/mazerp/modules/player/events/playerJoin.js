const framework = require("../../../"),
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
            player.dimension = 1;
        }
    }
};
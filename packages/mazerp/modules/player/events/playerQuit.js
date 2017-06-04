const framework = require("../../../"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "playerQuit",
        execute: (player, exitType, reason) => {
            /*logger.log("debug", `${player.name} ${exitType}.`);

            player.update({ health: player.health, armour: player.armour, money: player.money, position_x: player.position.x, position_y: player.position.y, position_z: player.position.z, heading: player.heading })
                .catch((err) => {
                    logger.log("error", "An error occured.", { player: player.name });
                    logger.log("error", err.message);
                    logger.log("error", err.stack);
                });
            */

            // Commented out as it crashes the server, requires debugging.
        }
    }
};
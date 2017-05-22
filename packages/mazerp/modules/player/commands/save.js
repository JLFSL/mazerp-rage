const functions = require("../../../functions"),
      framework = require("../../../"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

module.exports = {
    command: {
        aliases: [],
        name: "Save",
        execute: (player, message, arguments) => {
            player.update({ health: player.health, armour: player.armour, money: player.money, position_x: player.position.x, position_y: player.position.y, position_z: player.position.z, heading: player.heading })
                .catch((err) => {
                    player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                    logger.log("error", "An error occured.", { player: player.name });
                    logger.log("error", err.message);
                    logger.log("error", err.stack);
                });
        }
    }
};
const framework = require("../../../"),
      functions = require("../../../functions"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerLogin",
        execute: (player, result) => {
            logger.log("debug", `Player ${player.name} logged in.`);

            player.setHealth(result.health);
            player.setArmour(result.armour);
            player.setDimension(variables.dimensions.public);

            player.player.call("closeMenu");

            if (Math.round((new Date()).getTime() / 1000) - 600 > result.last_login_unix) {

                var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];
                player.spawn(spawn.position.x, spawn.position.y, spawn.position.z, spawn.heading);
            } else player.spawn(result.position_x, result.position_y, result.position_z, result.heading);

            player.update({ last_login: "CURRENT_TIMESTAMP" })
                .catch((err) => {
                    player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                    logger.log("error", "An error occured.", { player: player.name });
                    logger.log("error", err.message);
                    logger.log("error", err.stack);
                });

            player.staff = result.staff;
            player.money = result.money;
            player.bLoggedIn = true;
        }
    }
};
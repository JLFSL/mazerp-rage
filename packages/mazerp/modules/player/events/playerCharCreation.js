const framework = require("../../../"),
      functions = require("../../../functions"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerCharCreation",
        execute: (player, result) => {
            logger.log("debug", `Player ${player.name} logged in - Starting Char Creation`);

            const pos = variables.charCreation;

            player.setHealth(result.health);
            player.setArmour(result.armour);
            player.setDimension(variables.dimensions.private + result.id);

            player.iStaffLevel = result.iStaffLevel;
            player.iCash = result.iCash;
            player.bLoggedIn = true;

            player.player.call("openMenu","/custom/create");
            // player.player.call("closeMenu");
            // player.player.call("charCreation", true);

            player.playAnimation("mp_character_creation@customise@male_a", "drop_loop", 1, 2);

            player.spawn(pos.position.x, pos.position.y, pos.position.z, pos.heading);

            player.update({ last_login: "CURRENT_TIMESTAMP" })
                .catch((err) => {
                    // This error doesn't really affect the player, let's only log it.
                    // player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                    logger.log("error", "An error occured.", { player: player.name });
                    logger.log("error", err.message);
                    logger.log("error", err.stack);
                });

        }
    }
};
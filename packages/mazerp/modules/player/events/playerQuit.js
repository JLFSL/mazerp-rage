const framework = require("../../../"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "playerQuit",
        execute: (player, exitType, reason) => {
            logger.log("debug", `${player.name} ${exitType}.`);
            player.save();
        }
    }
};
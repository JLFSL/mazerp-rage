const framework = require("../../../"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "playerQuit",
        execute: (player, exitType, reason) => {
            console.log(exitType);
            logger.log("debug", `${player.name} ${exitType}.`);
        }
    }
};
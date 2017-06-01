const framework = require("../../../"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "playerEnterCheckpoint",
        execute: (player, checkpoint) => {
                    logger.log("debug", `${player.name} entered Checkpoint.`);
        }
    }
};
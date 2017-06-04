const framework = require("../../../"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "playerDeath",
        execute: (player, reason, killer) => {
            player.bUnconscious = true;
            // laying down animation? 
            
            logger.log("debug", `${player.name} died (reason: ${reason})`);
        }
    }
};
const framework = require("../../../../../"),
      functions = require("../../../../../functions"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "cefLoginDisconnect",
        execute: (player) => {
            logger.log("debug", `cefLoginDisconnect(${player.name})`);
            player.player.kick("Clicked disconnect");
            player.kick("Disconnect");
        }
    }
};
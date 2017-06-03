const framework = require("../../../../../"),
      functions = require("../../../../../functions"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "cefLoginDisconnect",
        execute: (player) => {
            logger.log("debug", `cefLoginDisconnect(${player.name})`);
<<<<<<< HEAD
            player.player.kick("Clicked disconnect");
=======
            player.kick("Disconnect");
>>>>>>> 3ddfee95b1e7468cac8122d422806dba0e912fff
        }
    }
};
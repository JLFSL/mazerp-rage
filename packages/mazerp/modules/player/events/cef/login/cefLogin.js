const framework = require("../../../../../"),
      functions = require("../../../../../functions"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "cefLogin",
        execute: (player, result) => {
            logger.log("debug", `cefLogin(${player.name}): ${result}.`);
        }
    }
};
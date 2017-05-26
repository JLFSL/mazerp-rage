const framework = require("../../../"),
      functions = require("../../../functions"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "cefData",
        execute: (player, result) => {
            logger.log("debug", `cefData(${player.name}): ${result}.`);
        }
    }
};
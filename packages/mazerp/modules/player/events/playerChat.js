const framework = require("../../../"),
      functions = framework.functions,
      logger = framework.logger;

const striptags = require("striptags");

module.exports = {
    event: {
        name: "playerChat",
        execute: (player, message) => {
            functions.sendGlobalMessage(`${player.name} says: ${striptags(message)}`);
            logger.log("debug", `${player.name}: ${striptags(message)}`);
        }
    }
};
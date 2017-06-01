const framework = require("../../../"),
      logger = framework.logger;

const variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerExitColshape",
        execute: (player, colshape) => {
            if(colshape.id == variables.drugs.drugArea.id) {
                    player.player.call("hideWeedMenu");
            }

            logger.log("debug", `${player.name} left Colshape ID ${colshape.id}.`);
        }
    }
};
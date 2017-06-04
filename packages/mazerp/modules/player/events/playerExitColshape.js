const framework = require("../../../"),
      logger = framework.logger;

const variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerExitColshape",
        execute: (player, colshape) => {

            if(colshape.id == variables.drugs.drugArea.id) { // leaving drug farm
                    player.player.call("hideWeedMenu");
            }

            if(variables.ConvenientStoreInfo.indexOf(colshape.id) > -1) { // leaving convenient stores
                player.player.call("shopMenuHide");
            }

            logger.log("debug", `${player.name} left Colshape ID ${colshape.id}.`);
        }
    }
};
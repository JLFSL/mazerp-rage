const framework = require("../../../"),
      logger = framework.logger;

const variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerExitColshape",
        execute: (player, colshape) => {

            if(colshape.id == variables.drugs.drugArea.id) // leaving drug farm
                player.player.call("hideWeedMenu");

            else if(variables.ConvenientStoreInfo.indexOf(colshape.id) > -1) // leaving convenient stores
                player.player.call('toggleShopKeybind', false);

            if(colshape.id == variables.drugs.drugSaleArea.id) // leaving drug delivery hotspot
                player.player.call("hideWeedDeliveryMenu");

            logger.log("debug", `${player.name} left Colshape ID ${colshape.id}.`);
        }
    }
};

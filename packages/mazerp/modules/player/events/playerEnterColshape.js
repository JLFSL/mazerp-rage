const framework = require("../../../"),
      logger = framework.logger;

const variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerEnterColshape",
        execute: (player, colshape) => {

            console.log("" + JSON.stringify(variables.ConvenientStoreInfo));

            if(colshape.id == variables.drugs.drugColshape.id) { // drug farm
                if(!player.iFaction) {
                    let inPossession = 0;

                    if("weedStacks" in player.aInventory)
                        inPossession = player.aInventory["weedStacks"];

                    player.player.call('toggleShopKeybind' /*, openMenu, inPossession */);
                }
            }

            if(colshape.id == variables.drugs.drugSale.id) { // selling drug pound
                if(!player.iFaction) {
                    if("weedOunce" in player.aInventory)
                        // trigger selling etc.
                        ;
                    else if("weedStacks" in player.aInventory) 
                        player.sendMessage("Dawg, come back with some stuff I can work with. I need an ounce, no stacks.");
                }
            }

            if(variables.ConvenientStoreInfo.indexOf(colshape.id) > -1) { // Convenient stores
                player.player.call('toggleShopKeybind', true /*, openMenu, inPossession */);
                // player.player.call("shopMenuShow");
            }

            logger.log("debug", `${player.name} entered Colshape ID ${colshape.id}`);
        }
    }
};
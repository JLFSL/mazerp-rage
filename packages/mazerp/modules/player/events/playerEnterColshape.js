const framework = require("../../../"),
      logger = framework.logger;

const variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerEnterColshape",
        execute: (player, colshape) => {

            console.log("" + JSON.stringify(variables.ConvenientStoreInfo));

            if(colshape.id == variables.drugs.drugColshape.id) { // drug farm
                if(!player.bEmployed) {
                    let inPossession = 0;
                    if("weedOunces" in player.inventory) {
                        inPossession = player.inventory["weedOunces"];
                    }
                    player.player.call("showWeedMenu", inPossession);
                }
            }

            if(colshape.id == variables.drugs.drugPackaging.id) { // drug packaging
                 if(!player.bEmployed) {
                    let inPossession = 0;
                    if("weedOunces" in player.inventory) {
                        inPossession = player.inventory["weedOunces"];
                    }

                    if(inPossession >= 16) {
                        player.player.call("showWeedPackageMenu");
                    }
                }
            }

            if(colshape.id == variables.drugs.drugSale.id) { // selling drug pound
                if(!player.bEmployed) {
                    if("weedPound" in player.inventory) {
                        player.player.call("showWeedDeliveryMenu");
                    } else if("weedOunces" in player.inventory) { player.sendMessage("Dawg, come back with some stuff I can work with. I need an ounce, no stacks."); }
                }
            }

            if(variables.ConvenientStoreInfo.indexOf(colshape.id) > -1) { // Convenient stores
                player.player.call("shopMenuShow");
            }

            logger.log("debug", `${player.name} entered Colshape ID ${colshape.id}`);
        }
    }
};
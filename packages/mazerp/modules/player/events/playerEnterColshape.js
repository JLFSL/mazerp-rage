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
                    if("weedStacks" in player.inventory) {
                        inPossession = player.inventory["weedStacks"];
                    }
                    player.player.call("showWeedMenu", inPossession);
                }
            }

            if(colshape.id == variables.drugs.drugSale.id) { // selling drug pound
                if(!player.bEmployed) {
                    if("weedOunce" in player.inventory) {
                        // trigger selling etc.
                    } else if("weedStacks" in player.inventory) { player.sendMessage("Dawg, come back with some stuff I can work with. I need an ounce, no stacks."); }
                }
            }

            if(variables.ConvenientStoreInfo.indexOf(colshape.id) > -1) { // Convenient stores
                player.player.call("shopMenuShow");
            }

            logger.log("debug", `${player.name} entered Colshape ID ${colshape.id}`);
        }
    }
};
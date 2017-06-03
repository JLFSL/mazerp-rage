const framework = require("../../../"),
      logger = framework.logger;

const variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerEnterColshape",
        execute: (player, colshape) => {
                                let inPossession = 0;
            if(colshape.id == variables.drugs.drugColshape.id) {
                if(!player.bEmployed) {
                    if("weedStacks" in player.inventory) {
                        inPossession = player.inventory["weedStacks"];
                    }
                    player.player.call("showWeedMenu", inPossession);
                }
            }

            if(colshape.id == variables.drugs.drugSale.id) {
                if(!player.bEmployed) {
                    if("weedOunce" in player.inventory) {
                        // trigger selling etc.
                    } else if("weedStacks" in player.inventory) { player.sendMessage("Dawg, come back with some stuff I can work with. I need an ounce, no stacks."); }
                }
            }
            logger.log("debug", `${player.name} entered Colshape ID ${colshape.id}. (has ${inPossession})`);
        }
    }
};
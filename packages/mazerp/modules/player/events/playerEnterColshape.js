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

            logger.log("debug", `${player.name} entered Colshape ID ${colshape.id}. (has ${inPossession})`);
        }
    }
};
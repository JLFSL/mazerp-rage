const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefDeliverWeed",
        execute: (player) => {
           if("weedPound" in player.inventory && player.inventory["weedPound"] == 1) {
                delete player.inventory["weedPound"];

                if(player.inventory["dirtyMoney"] == undefined) {
                    player.inventory["dirtyMoney"] = {"amount":0};
                }
                player.inventory["dirtyMoney"]["amount"] += 150;

                player.sendMessage("You received 150$ in dirty notes. You have to clean the dirty money before being able to use it properly!");
                player.player.call("hideWeedDeliveryMenu");
            }

        }
    }
};
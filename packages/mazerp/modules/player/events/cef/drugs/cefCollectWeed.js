const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefCollectWeed",
        execute: (player, amount) => {
            let current = 0;
            if(player.inventory != undefined && "weedStacks" in player.inventory) {
                current = player.inventory["weedStacks"];
            } else {
                player.inventory["weedStacks"] = 0;
            }
            
            if((current+amount) <= 5) {
            player.inventory["weedStacks"] += amount;
            } else {
                player.inventory["weedStacks"] = 5;
            }

            player.sendMessage("You are now in possession of " + player.inventory["weedStacks"] + " weed stacks! (MAX: 5)")
        }
    }
};
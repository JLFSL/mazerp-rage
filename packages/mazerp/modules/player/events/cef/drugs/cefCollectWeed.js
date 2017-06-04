const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefCollectWeed",
        execute: (player, amount) => {
            let current = 0;
            if(player.aInventory != undefined && "weedStacks" in player.aInventory) {
                current = player.aInventory["weedStacks"];
            } else {
                player.aInventory["weedStacks"] = 0;
            }
            
            if((current+amount) <= 5)
                player.aInventory["weedStacks"] += amount;
            else
                player.aInventory["weedStacks"] = 5;
            
            player.sendMessage("You are now in possession of " + player.aInventory["weedStacks"] + " weed stacks! (MAX: 5)")
        }
    }
};
const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefCollectWeed",
        execute: (player, amount) => {
            let current = 0;
            if(player.inventory != undefined && "weedOunces" in player.inventory) {
                current = player.inventory["weedOunces"];
            } else {
                player.inventory["weedOunces"] = {"amount": 0};
            }
            
            if((current+amount) <= 16) {
                player.inventory["weedOunces"]["amount"] += amount;
            } else {
                player.inventory["weedOunces"]["amount"] = 16;
            }

            player.sendMessage("You are now in possession of " + player.inventory["weedOunces"] + " weed stacks! (MAX: 16)")
        }
    }
};
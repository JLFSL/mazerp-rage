const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefPackageWeed",
        execute: (player) => {
           if("weedOunces" in player.inventory && player.inventory["weedOunces"] >= 16) {
                delete player.inventory["weedOunces"];

                player.inventory["weedPound"] = {"amount":1};

                player.sendMessage("You packaged your weed ounces to a pound. You are able to sell it near the Groove Street!");
                player.player.call("hideWeedPackageMenu");
            }

        }
    }
};
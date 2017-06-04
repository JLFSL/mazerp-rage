const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefBuyItem",
        execute: (player, item, name, amount, price) => {
            if(player.player.iCash >= price) {
                if(!player.aInventory[item]) 
                    player.aInventory[item] = {};

                if(!player.aInventory[item]["amount"])
                    player.aInventory[item]["amount"] = 0;

                player.aInventory[item]["amount"] += amount;
                player.iCash -= price;

                player.sendMessage("You bought " + name + " (x" + amount + ") for $" + price + ".");
            } 
            else return player.sendMessage("You do not own enough money to buy this item (x" + amount + ")!");
        }
    }
};
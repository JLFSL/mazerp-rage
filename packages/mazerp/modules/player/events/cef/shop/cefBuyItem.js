const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefBuyItem",
        execute: (player, item, name, amount, price) => {
            if(player.player.iCash >= price) {
                if(player.inventory[item] == null) {player.inventory[item] = {};}
                if(player.inventory[item]["amount"] == null) {player.inventory[item]["amount"] = 0;}
                player.inventory[item]["amount"] +=amount;
                player.player.iCash -= price;
                player.sendMessage("You bought " + name + " (x" + amount + ") for " + price + "$.");
            } else player.sendMessage("You do not own enough money to buy this item (x" + amount + ")!");
        }
    }
};
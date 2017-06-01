const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefBuyItem",
        execute: (player, item, name, amount, price) => {
            if(player.player.iCash >= price) {
                for(let i=0; i<amount; i++) {
                    //player.inventory.push(item);
                }
                player.player.iCash -= price;
                player.sendMessage("You bought " + name + " (x" + amount + ") for " + price + "$.");
            } else player.sendMessage("You do not own enough money to buy this item (x" + amount + ")!");
        }
    }
};
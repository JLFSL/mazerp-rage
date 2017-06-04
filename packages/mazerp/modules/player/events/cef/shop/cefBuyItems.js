const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefBuyItems",
        execute: (player, itemArray, price) => {
            let cart = JSON.parse(itemArray);

            if(player.iCash >= price) {
                for(itemName in cart) {
                    let amount = parseInt(cart[itemName]["amount"]);
                    let name = cart[itemName]["name"];
                    let item = cart[itemName]["item"];
                    
                    if(!player.aInventory[item])
                        player.aInventory[item] = {};
                    if(!player.aInventory[item]["amount"])
                        player.aInventory[item]["amount"] = 0;

                    player.aInventory[item]["amount"] += amount;

                    player.sendMessage("You bought " + name + " (x" + amount + ") for $" + cart[itemName]["price"] + ".");
                }
                player.player.iCash -= price;

            } else return player.sendMessage("You do not own enough money to buy these items!");
        }
    }
};
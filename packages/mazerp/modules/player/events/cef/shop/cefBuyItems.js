const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefBuyItems",
        execute: (player, itemArray, price) => {
            let cart = JSON.parse(itemArray);
            if(player.player.iCash >= price) {
                for(itemName in cart) {
                    let amount = parseInt(cart[itemName]["amount"]);
                    let name = cart[itemName]["name"];
                    let item = cart[itemName]["item"];
                    
                    if(player.inventory[item] == null) {player.inventory[item] = {};}
                    if(player.inventory[item]["amount"] == null) {player.inventory[item]["amount"] = 0;}

                    player.inventory[item]["amount"] += amount;

                    player.sendMessage("You bought " + name + " (x" + amount + ") for " + cart[itemName]["price"] + "$.");
                }
                player.player.iCash -= price;
            } else player.sendMessage("You do not own enough money to buy these items!");
        }
    }
};
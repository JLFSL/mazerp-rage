const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefCheckWallet",
        execute: (player) => {
            player.sendMessage("WALLET: You look into your wallet and count the notes up to " + player.player.iCash + "$.");
        }
    }
};
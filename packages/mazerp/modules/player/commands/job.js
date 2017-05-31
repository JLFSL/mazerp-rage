// Provisional command since enterCheckpoint event is undocumented

const functions = require("../../../functions"),
        variables = require("../../../variables");

module.exports = {
    command: {
        aliases: [],
        name: "job",
        execute: (player, message) => {
            if (arguments.length < 2) return player.sendMessage("The usage for that command is (/job [Taxi/Trucker/Delivery])");
            if(player.player.bHasJob == true) {
                player.player.call("cancelJob"); //! CEF
            } else {
                if(arguments[1] == "Taxi") {
                    player.player.sJobName = "Taxi";
                } else if(arguments[1] == "Trucker") {
                    player.player.sJobName = "Trucker;"
                } else if(arguments[1] == "Delivery") {
                    player.player.sJobName = "Delivery";
                }

               player.player.bHasJob = true;
               player.player.bEmployed = true;
            }
        }
    }
};
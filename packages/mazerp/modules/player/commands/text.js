const functions = require("../../../functions");
const variables = require("../../../variables");


module.exports = {
    command: {
        aliases: [],
        name: "text",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) return player.sendMessage("The usage for that command is (/text [number] [message] )");

            let number = arguments[1];
            let toSend = "";
            for(let i=2; i<arguments.length; i++) {
                toSend += " " + arguments[i];
            }

            let bFound = false;


            for(playerKey in variables.PlayerInfo) {
                let pPlayer = variables.PlayerInfo[playerKey];
                console.log("" + pPlayer.sPhoneNumber);
                if(pPlayer.sPhoneNumber == number) {
                    bFound = true;
                    pPlayer.sendMessage("[PHONE] " + player.sPhoneNumber + ": " + toSend);
                }
            }
            if(bFound) {
                player.sendMessage("[PHONE] Sent to " + number + ": " + toSend);
            } else {
                player.sendMessage("[PHONE] Unable to send message to this number.");
            }
        }
    }
};
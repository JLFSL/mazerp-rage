const functions = require("../../../functions");
const variables = require("../../../variables");

module.exports = {
    command: {
        aliases: [],
        name: "text",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) {
                for(var i=player.messages.length-1; i>=0; i--) {
                    player.sendMessage(player.messages[i]);
                }
                 return player.sendMessage("The usage for that command is (/text [number] [message] )");
            }



            let number = arguments[1];
            let toSend = "";
            for(let i = 2; i < arguments.length; i++) {
                toSend += " " + arguments[i];
            }
            let bFound = false;

            player.sPhoneNumber = "06-1337-69";

            for(playerKey in variables.PlayerInfo) {
                let pPlayer = variables.PlayerInfo[playerKey];
                if(pPlayer.sPhoneNumber == number) {
                    bFound = true;
                    pPlayer.sendMessage("[PHONE] " + player.sPhoneNumber + ": " + toSend);
                    if(pPlayer.messages.length == 5) {
                        pPlayer.messages.pop();
                    }
                    pPlayer.messages.unshift("From " + player.sPhoneNumber + ": " + toSend);
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
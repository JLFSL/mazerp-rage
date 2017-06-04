const functions = require("../../../functions");
const variables = require("../../../variables");

module.exports = {
    command: {
        aliases: [],
        name: "text",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) {
                for(i=player.messages.length-1; i>=0; i--) {
                    player.sendMessage("" + player.messages[i]);
                }
                
                player.sendMessage("[INFO] Use '/text [number] [message] to send a text message!");
                return;
            }

            let number = arguments[1];
            let toSend = "";
            for(let i = 2; i < arguments.length; i++) {
                toSend += " " + arguments[i];
            }

            let bFound = false;

            for(playerKey in variables.PlayerInfo) {
                let pPlayer = variables.PlayerInfo[playerKey];
                if(pPlayer.sPhoneNumber == number) {
                    bFound = true;
                    pPlayer.sendMessage("[PHONE] " + player.sPhoneNumber + ": " + toSend);
                    if(pPlayer.messages.length == 5) {
                        pPlayer.messages.pop(pPlayer.messages);
                    }
                    pPlayer.messages.unshift("From " + player.sPhoneNumber + ": " + toSend);
                    console.log("" + JSON.stringify(pPlayer.messages));

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
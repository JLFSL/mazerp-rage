const functions = require("../../../functions");
const variables = require("../../../variables");

module.exports = {
    command: {
        aliases: [],
        name: "Text",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) {
                for(var i = player.sMessages.length -1; i >= 0; i--) {
                    player.sendMessage("" + player.sMessages[i]);
                }
                return player.sendMessage("The usage for that command is (/text [number] [message])");
            }

            var number = arguments[1];
            var toSend = "";
            var bFound = false;

            for(var i = 2; i < arguments.length; i++) {
                toSend += " " + arguments[i];
            }

            player.sPhoneNumber = "06-1337-69";

            for(playerKey in variables.PlayerInfo) {
                var pPlayer = variables.PlayerInfo[playerKey];

                if(pPlayer.sPhoneNumber == number) {
                    pPlayer.sendMessage("[PHONE] " + player.sPhoneNumber + ": " + toSend);

                    if(pPlayer.sMessages.length == 5)
                        pPlayer.sMessages.pop(pPlayer.sMessages);

                    pPlayer.sMessages.unshift("From " + player.sPhoneNumber + ": " + toSend);

                    console.log("" + JSON.stringify(pPlayer.sMessages));
                    bFound = true;
                }
            }

            if(bFound)
                player.sendMessage("[PHONE] Sent to " + number + ": " + toSend);
            else
                player.sendMessage("[PHONE] Unable to send message to this number.");
        }
    }
};
// Provisional command since enterCheckpoint event is undocumented
const police = require('../../../classes/Police');

module.exports = {
    command: {
        aliases: ["lout"],
        name: "Loadout",
        execute: (player, message, arguments) => {
           if (arguments.length < 2) return player.sendMessage("The usage for that command is (/loadout [cop/medic])");

           if(arguments[1] == "cop") {
                police.AddLoadoutTo(player.player);
           }
        }
    }
};
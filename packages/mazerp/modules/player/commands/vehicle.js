const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["veh"],
        name: "Vehicle",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return player.sendMessage("The usage for that command is (/vehicle [modelname])");

            var position = player.position; 
            position.x += 2.0;
            
            player.spawnedVehicle = mp.vehicles.new(mp.joaat(arguments[1]), position);
            player.spawnedVehicle.dimension = player.dimension;
        }
    }
};
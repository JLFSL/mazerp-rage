const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["veh"],
        name: "Vehicle",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return functions.sendPlayerMessage(player, "The usage for that command is <vehicle name>.");

            var position = player.position; position.x += 2.0;
            player.spawnedVehicle = mp.vehicles.new(mp.joaat(arguments[1]), position);
            player.spawnedVehicle.dimension = 1;
        }
    }
};
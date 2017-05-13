module.exports = {
    "veh": (player, text, arguments) => {
        var pos = player.position;		
 		pos.x += 2.0;

        player.currentVehicle = mp.vehicles.new(mp.joaat(arguments[1]), pos);
        player.currentVehicle.dimension = 1;
    }
};
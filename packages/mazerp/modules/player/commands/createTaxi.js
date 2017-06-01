// Provisional command as checkpoint events are undocumented for now
const taxi = require('../../../classes/Taxi');
const functions = require("../../../functions"),
        variables = require("../../../variables");

module.exports = {
    command: {
        aliases: ["cTaxi"],
        name: "createTaxi",
        execute: (player, message) => {
            for(TaxiBranch in variables.TaxiBranchInfo) {
                player.sendMessage("" + TaxiBranch.vPosition.x);
                if(functions.isInRangeOf(player.position, TaxiBranch.vPosition, 20)) {
                    var position = player.position; 
                    position.x += 2.0;
                    
                    var newTaxi = mp.vehicles.new(mp.joaat("taxi"),position);
                    newTaxi.dimension = player.dimension;

                    variables.TaxiInfo[player.name] = new taxi.Taxi(newTaxi,player.player);
                }
            }
        }
    }
};

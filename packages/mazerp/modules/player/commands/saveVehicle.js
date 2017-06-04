const functions = require("../../../functions");
const mysql = require("../../mysql");

module.exports = {
    command: {
        aliases: ["saveveh"],
        name: "saveVehicle",
        execute: (player, message, arguments) => {
            let factionID;
            if(arguments.length < 1) {
                 factionID = -1;
            } else factionID = arguments[1];

            let modelName = player.vehicle.model;
            let position = player.vehicle.position;
            let rotation = player.vehicle.rotation;
            let color_1, color_2 = 0;

            mysql.getConnection((err, connection) => {
                connection.query("INSERT INTO `vehicles` (`factionid`,`ownerid`,`model_name`,`position_x`,`position_y`,`position_z`,`rotation_x`,`rotation_y`,`rotation_z`,`color_1`,`color_2`) VALUES ('" + factionID + "','-1','" + modelName + "','" + position.x + "','" + position.y + "','" + position.z + "','" + rotation.x + "','" + rotation.y + "','" + rotation.z + "','" + color_1 + "','" + color_2 + "');",(err,result) => {
                    if (err) { console.log(err); }
                });
                connection.release();
            });         
        }
    }
};
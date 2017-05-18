module.exports = {
    command: {
        aliases: ["setpos"],
        name: "SetPosition",
        execute: (player, message, arguments) => {
            if (arguments.length < 4) return functions.sendPlayerMessage(player, "The usage for that command is <x> <y> <z>.");
            player.position = new Vector3(parseFloat(arguments[1]), parseFloat(arguments[2]), parseFloat(arguments[3]));
        }
    }
};
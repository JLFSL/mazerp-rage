const variables = require("../../../variables");

module.exports = {
  command: {
      aliases: [],
      name: "Close",
      execute: (player, message, arguments) => {
          var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];

          player.player.call("authenticationHide");
          player.setPosition(spawn.position.x, spawn.position.y, spawn.position.z, spawn.heading);
      }
  }
}
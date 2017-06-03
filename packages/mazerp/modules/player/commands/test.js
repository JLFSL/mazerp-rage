module.exports = {
  command: {
    aliases: [],
    name: "Test",
    execute: (player, message, arguments) => {
      player.player.call("openMenu", "/login");
    }
  }
}
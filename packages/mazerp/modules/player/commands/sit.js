module.exports = {
  command: {
      aliases: [],
      name: "Sit",
      execute: (player, message, arguments) => {
          player.setPosition(-35.1, -153.3, 57.03, 65);
          player.player.playAnimation('misshair_shop@barbers', 'player_idle_a', 1, 1);
      }
  }
}
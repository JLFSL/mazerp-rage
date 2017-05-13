module.exports = {
	"playerJoin": (player) => {
		player.outputChatBox("Welcome to dimensions freeroam server<br/>Most used commands:<br/>/veh name (e. g. /veh sultanrs)<br/>/weapon name (e.g. /weapon WEAPON_PISTOL)<br/>/setdimension id (e.g. /setdimension 10)");
		player.outputChatBox("Your current dimension: " + player.dimension);
		
		player.model = game.models[Math.floor(Math.random() * game.models.length)]
		player.giveWeapon(game.weapons, 1000);
		
		player.spawn(game.spawns[Math.floor(Math.random() * game.spawns.length)]);

		player.veh = null;
		player.kills = 0;
	}
};
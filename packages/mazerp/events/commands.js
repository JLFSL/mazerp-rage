const path = require("path"),
	  walk = require("../functions/walk");

var commands = {};

setTimeout(() => {
	console.log("\nLoading Commands:");

	walk(path.resolve(__dirname, "../commands"))
		.then((files) => {
			for (let i = 0; i < files.length; i++) {
				Object.assign(commands, require(files[i]));
				console.log(`\t${files[i].replace(/.*\\([^\\]+)\\/gm, "")}`);
			}

			for (let i = 0; i < events.length; i++) {
				mp.events.add(events[i]);
			}
		})
		.catch((err) => {
			console.log(err);
		});
}, 0);

module.exports = {
	"playerCommand": (player, text) => {
		var arguments = text.split(" "),
			command = commands[arguments[0]];

		if (command != null) command(player, text, arguments);
	}
};
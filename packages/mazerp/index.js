const Framework = require("./framework"),
      path = require("path");

<<<<<<<
const events = require("./events");


=======
const framework = new Framework({
    "directories": [path.resolve(__dirname, "commands"), path.resolve(__dirname, "events"), path.resolve(__dirname, "modules")]
});

framework.on("load", (type, module) => {
    console.log(`Loaded ${type} ${module.name}.`);
});

framework.on("error", (err) => {
    console.log(err)
});

module.exports = framework;
>>>>>>>
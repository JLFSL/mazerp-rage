const path = require("path"),
      walk = require("./functions/walk");

var events = [];

console.log("\nLoading Events:");

walk(path.resolve(__dirname, "events"))
    .then((files) => {
        for (let i = 0; i < files.length; i++) {
            events.push(require(files[i]));
            console.log(`\t${files[i].replace(/.*\\([^\\]+)\\/gm, "")}`);
        }

        for (let i = 0; i < events.length; i++) {
             mp.events.add(events[i]);
        }

        walk(path.resolve(__dirname, "modules"))
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(err);
    });
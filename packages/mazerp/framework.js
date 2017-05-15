const Collection = require("./util/Collection"),
      EventEmitter = require("events").EventEmitter;
      walk = require("./functions/walk");

module.exports = class Framework extends EventEmitter {
    constructor(options = {}) {
        super();

        if (options.directories == null) return this.emit("error", "Directories to be loaded must be specified");

        this.commands = new Collection(),
        this.events = new Collection(),
        this.modules = new Collection();

        for (let i = 0; i < options.directories.length; i++) {
            walk(options.directories[i])
                .then((files) => {
                    for (let i = 0; i < files.length; i++) {
                        if (!(files[i].includes("node_modules") || files[i].includes("public"))) {
                            this.load(files[i])
                                .catch((err) => {
                                    this.emit("error", err);
                                });
                        }
                    }
                })
                .catch((err) => {
                    return this.emit("error", err);
                })
        }
    }

    load(path) {
        return new Promise((resolve, reject) => {
            try {
                const module = require(path);
                module.path = path;

                if (module.commands) {
                    for (let i = 0; i < module.commands.length; i++) {
                        module.commands[i].path = module.path;
                        this.register("command", module.commands[i]);
                    }
                }

                if (module.events) {
                    for (let i = 0; i < module.events.length; i++) {
                        module.events[i].path = module.path;
                        this.register("event", module.events[i]);
                    }
                }

                if (module.modules) {
                    for (let i = 0; i < module.modules.length; i++) {
                        module.modules[i].path = module.path;
                        this.register("module", module.modules[i]);
                    }
                }
            } catch (err) {
                err.fileName = /[^\/]*$/g.exec(path.toString())[0];
                return reject(err);
            }
        });
    }

    unload(type, name) {

    }

    reload(type, name) {
        
    }

    register(type, module) {
        if (type == "command") {
            this.commands.set(module.name.toLowerCase(), module);
            this.emit("load", "Command", module);
        } else if (type == "event") {
            this.events.set(module.name.toLowerCase(), module);

            if (module.name.toLowerCase() == "playerJoin".toLowerCase()) mp.events.add({ "playerJoin": module.execute });
            else if (module.name.toLowerCase() == "playerQuit".toLowerCase()) mp.events.add({ "playerQuit": module.execute });
            else if (module.name.toLowerCase() == "playerDeath".toLowerCase()) mp.events.add({ "playerDeath": module.execute });
            else if (module.name.toLowerCase() == "playerEnterVehicle".toLowerCase()) mp.events.add({ "playerEnterVehicle": module.execute });
            else if (module.name.toLowerCase() == "playerEnteredVehicle".toLowerCase()) mp.events.add({ "playerEnteredVehicle": module.execute });
            else if (module.name.toLowerCase() == "playerExitVehicle".toLowerCase()) mp.events.add({ "playerExitVehicle": module.execute });
            else if (module.name.toLowerCase() == "playerLeftVehicle".toLowerCase()) mp.events.add({ "playerLeftVehicle": module.execute });
            else if (module.name.toLowerCase() == "playerSpawn".toLowerCase()) mp.events.add({ "playerSpawn": module.execute });
            else if (module.name.toLowerCase() == "playerChat".toLowerCase()) mp.events.add({ "playerChat": module.execute });
            else if (module.name.toLowerCase() == "playerCommand".toLowerCase()) mp.events.add({ "playerCommand": module.execute });
            else if (module.name.toLowerCase() == "playerEnterCheckpoint".toLowerCase()) mp.events.add({ "playerEnterCheckpoint": module.execute });
            else if (module.name.toLowerCase() == "playerExitCheckpoint".toLowerCase()) mp.events.add({ "playerExitCheckpoint": module.execute });
            else if (module.name.toLowerCase() == "playerEnterColshape".toLowerCase()) mp.events.add({ "playerEnterColshape": module.execute });
            else if (module.name.toLowerCase() == "playerExitColshape".toLowerCase()) mp.events.add({ "playerExitColshape": module.execute });

            this.emit("load", "Event", module);
        } else if (type == "module") {
            this.events.set(module.name.toLowerCase(), module);
            this.emit("load", "Module", module);
        }
    }
};
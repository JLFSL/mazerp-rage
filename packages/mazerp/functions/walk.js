const nodeDir = require("node-dir");

module.exports = walk = (path) => {
    return new Promise((resolve, reject) => {
        var f = [];

        nodeDir.files(path, (err, files) => {
            if (err) return reject(err);

            for (let i = 0; i < files.length; i++) {
                if (!(files[i].includes("node_modules") || files[i].includes("index.js") || files[i].includes("package.json"))) {
                    f.push(files[i]);
                }
            }

            return resolve(f);
        });
    });
};
const createConnection = require("../functions/createConnection");

module.exports = {
	"serverStart": () => {
        createConnection();
    }
};
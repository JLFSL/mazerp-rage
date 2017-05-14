const framework = require("../framework");

const config = require("../config"),
      mysql = require("mysql"),
      pool = mysql.createPool(config.mysql);

module.exports = {
      name: "MySQL",
      pool: pool
};
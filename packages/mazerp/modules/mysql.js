const config = require("../config"),
      mysql = require("mysql"),
      pool = mysql.createPool(config.mysql);

module.exports = pool;

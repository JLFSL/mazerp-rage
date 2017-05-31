const framework = require("../../../../../"),
      functions = require("../../../../../functions");

module.exports = {
    event: {
        name: "cefPoliceMBT_runID",
        execute: (player, ID) => {
           for(pPlayer in PlayerInfo) {
               if(pPlayer.personalID == ID) {
                   
               }
           }
        }
    }
};
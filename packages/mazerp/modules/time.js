const variables = require("../variables");

var time = 21600, // Start the clock at 6am
    minutes = 0;

mp.environment.time.hour = Math.floor(time / (60 * 60));
mp.environment.time.minute = Math.floor((time % (60 * 60)) / 60);
mp.environment.time.second = Math.floor((time % (60 * 60) / 60) % 60);

setInterval(() => {
    // World Time
    minutes += 1;
    if (minutes >= 60) {
        minutes = 0;
        time = 21600;
    }

    if (minutes <= 45) time += 1120;
    else time += 1200;

    if (time >= 86400) time -= 86400;

    mp.environment.time.hour = Math.floor(time / (60 * 60));
    mp.environment.time.minute = Math.floor((time % (60 * 60)) / 60);
    mp.environment.time.second = Math.floor(time % 60);

    // Set hunger / thirst / online time
    for(var p = 0; p < variables.PlayerInfo.length; p++) {

        variables.PlayerInfo[p].fHunger += 1.66667;
        variables.PlayerInfo[p].fThirst += 1.66667;

        // Update the HUD
        variables.PlayerInfo[p].player.call('updateHUD', variables.PlayerInfo[p].fHunger, variables.PlayerInfo[p].fThirst);

        //variables.PlayerInfo[p].sendMessage(`${p}: hungerthirst update ${variables.PlayerInfo[p].fHunger} ${variables.PlayerInfo[p].fThirst}`);
        //variables.PlayerInfo[p].sendMessage(variables.getHungerState(variables.PlayerInfo[p].fHunger)[0]);
        //variables.PlayerInfo[p].sendMessage(variables.getThirstState(variables.PlayerInfo[p].fThirst)[0]);

        if(variables.PlayerInfo[p].bUnconscious) {
            variables.PlayerInfo[p].iUnconsciousTime++;
            if(variables.PlayerInfo[p].iUnconsciousTime >= 10) {
                variables.PlayerInfo[p].respawnByDeath(variables.respawnByDeath.position, variables.respawnByDeath.heading);
                variables.PlayerInfo[p].iUnconsciousTime = 0;
            }
        }

        if(variables.PlayerInfo[p].bEmployed) {
            variables.PlayerInfo[p].iEmploymentTime++;

            if(variables.PlayerInfo[p].iEmploymentTime >= 5) { // If time is 5 minutes, give player new employment tick, reset time for tick and add the payment he receives for that tick to the payment var.
                variables.PlayerInfo[p].iEmploymentTicks++;
                variables.PlayerInfo[p].iEmploymentTime = 0;
                variables.PlayerInfo[p].iPayment += variables.PlayerInfo[p].job.payPerTick;
            }
        }
    }

    // Paycheck
    if(minutes == 40) {
        for(var p = 0; p < variables.PlayerInfo.length; p++) {
                let Payment = variables.PlayerInfo[p].iPayment;
                
                if(variables.PlayerInfo[p].iEmploymentTicks > 0) {
                    variables.PlayerInfo[p].iBankAccount += Payment;
                    variables.PlayerInfo[p].sendMessage("[PAYCHECK] You received your paycheck of " + Payment + "$ for your tasks.");
                } else {
                    variables.PlayerInfo[p].iBankAccount += variables.economy.welfare;
                    variables.PlayerInfo[p].sendMessage("[PAYCHECK] You received welfare of " + variables.economy.welfare + "$ for being unemployed.");
                }
                variables.PlayerInfo[p].iEmploymentTicks = 0;
                variables.PlayerInfo[p].iPayment = 0;
        }
    }
}, 60000);
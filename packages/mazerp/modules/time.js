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
    for(var pPlayer in PlayerInfo) {
        pPlayer.hunger += 1.66667;
        pPlayer.thirst += 1.66667;

        if(pPlayer.bEmployed) {
            pPlayer.iEmploymentTime++;
        }

        //  - We should save paycheck minutes and employment time with disconnect in db, since there is the chance a player could skip payouts. 
        //    Loading the previous minutes allows the player to receive all paychecks that were missed before tha.t
        pPlayer.iPaycheckMinutes++;
    }

    // Paycheck
    if(minutes == 40) {
        for(var pPlayer in PlayerInfo) {
                let EmployedTicks = Math.floor(pPlayer.iEmploymentTime / 5);
                let UnemployedTicks = Math.ceil( (pPlayer.iPaycheckMinutes - pPlayer.iEmploymentTime) / 5);
                let Payment = (EmployedTicks * variables.economy.minimumWage) + (UnemployedTicks * variables.economy.unemployment);
                // send proper message to player that it worked n stuff

                pPlayer.iBankAccount += Payment;
                pPlayer.iEmploymentTime = 0;
                pPlayer.iPaycheckMinutes = 0;
        }
    }

    
}, 60000);
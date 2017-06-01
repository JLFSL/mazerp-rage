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

            if(pPlayer.iEmploymentTime >= 5) { // If time is 5 minutes, give player new employment tick, reset time for tick and add the payment he receives for that tick to the payment var.
                pPlayer.iEmploymentTicks++;
                pPlayer.iEmploymentTime = 0;
                pPlayer.iPayment += pPlayer.job.payPerTick;
            }
        }
    }

    // Paycheck
    if(minutes == 40) {
        for(var pPlayer in PlayerInfo) {
                let Payment = pPlayer.iPayment;
                // send proper message to player that it worked n stuff
                if(iEmploymentTicks > 0) {
                    pPlayer.iBankAccount += Payment;
                } else {
                    pPlayer.iBankAccount += variables.economy.welfare;
                }
                pPlayer.iEmploymentTicks = 0;
                pPlayer.iPayment = 0;
        }
    }
}, 60000);
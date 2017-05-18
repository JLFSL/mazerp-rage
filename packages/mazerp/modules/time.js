var time = 21600, // Start the clock at 6am
    minutes = 0;

mp.environment.time.hour = Math.floor(time / (60 * 60));
mp.environment.time.minute = Math.floor((time % (60 * 60)) / 60);
mp.environment.time.second = Math.floor((time % (60 * 60) / 60) % 60);

// console.log(mp.environment.time);
// console.log(minutes);

setInterval(() => {
    minutes += 1;
    if (minutes >= 60) {
        minutes = 0; 
        time = 21600;
    }
    
    if (minutes <= 45) time += 1120;
    else time += 2400;
    
    if (time >= 86400) time -= 86400;

    mp.environment.time.hour = Math.floor(time / (60 * 60));
    mp.environment.time.minute = Math.floor((time % (60 * 60)) / 60);
    mp.environment.time.second = Math.floor((time % (60 * 60) / 60) % 60);

    // console.log(mp.environment.time);
    // console.log(minutes);
}, 30000);
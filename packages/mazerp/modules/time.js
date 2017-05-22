var time = 21600, // Start the clock at 6am
    ticks = 0;

mp.environment.time.hour = Math.floor(time / (60 * 60));
mp.environment.time.minute = Math.floor((time % (60 * 60)) / 60);
mp.environment.time.second = Math.floor((time % (60 * 60) / 60) % 60);

//console.log(mp.environment.time);
//console.log(ticks);

/*setInterval(() => {
    ticks += 1;
    if (ticks >= 360000) {
        ticks = 0; 
        time = 21600;
    }
    
    if (ticks <= 270000) time += 0.18667;
    else time += 0.40;
    
    if (time >= 86400) time -= 86400;

    mp.environment.time.hour = Math.floor(time / (60 * 60));
    mp.environment.time.minute = Math.floor((time % (60 * 60)) / 60);
    mp.environment.time.second = Math.floor(time % 60);

    //console.log(mp.environment.time);
    //console.log(ticks);
}, 10);*/
const framework = require("../framework");

var hour = 6,
    minute = 0;
    second = 0;

mp.environment.time.hour = hour;
mp.environment.time.minute = minute;

setInterval(() => {
  minute += 1;

  if (minute >= 60) minute = 0;
  if (minute <= 45) second += 1120;
  else second += 2400;

  if (second >= 86400) second -= 86400;

  seconds = second % 60;
  minutes = seconds / 60;
  hours = minutes / 60;

  mp.environment.time.second = seconds;
  mp.environment.time.minute = minutes;
  mp.environment.time.hour = hours;

  console.log(hours);
  console.log(minutes);
  console.log(seconds);
}, 60000);
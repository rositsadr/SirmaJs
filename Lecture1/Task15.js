function speed(distance,hours,minutes,seconds){
    let timeInSeconds = (hours*60 +minutes)*60;
    let speedCal = distance/timeInSeconds;
    console.log(speedCal);
}

speed(100,1,20,20);
speed(2500,5,56,23);
speed(600,7,35,55);
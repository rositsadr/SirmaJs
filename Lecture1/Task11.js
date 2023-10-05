function time(minutes){
    let a = minutes/60;
    let hours = Math.floor(a);
    let minute = Math.floor(60*(a-hours));
    console.log(hours + ":" + minute);
}

time(60);
time(90);
time(325);
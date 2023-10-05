function time(minutes){
    let a = minutes/60;
    let hours =String(Math.floor(a)).padStart(2,"0");
    let minute = Math.floor(60*(a-hours));
    console.log(hours + ":" + minute);
}

time(60);
time(90);
time(325);
time(700);
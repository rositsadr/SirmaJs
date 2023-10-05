function clock(hourNow, minutesNow){
    const a = 15;
    let newMinutes = minutesNow+a;
    let minutesToPrint = newMinutes;
    let hoursToPrint = hourNow;

    if (newMinutes>=60){
        minutesToPrint = newMinutes-60;
        let newHours = hourNow+1;
        hoursToPrint = newHours;
        
        if (newHours>=24){
            hoursToPrint = 0;
        }
    }

    console.log(String(hoursToPrint) + ":"+String(minutesToPrint).padStart(2,"0"));
}

clock(1,47);
clock(0,2);
clock(23,59);
clock(11,7);
clock(12,48);
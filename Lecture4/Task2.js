function dayOfWeek(n){
    const days= [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if(n>0 && n<8 && Number.isInteger(n)){
        console.log(days[n-1]);
    }
    else{
        console.log("Invalid!");
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
dayOfWeek(3.2);
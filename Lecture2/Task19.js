function LeapYear(year){
    if ((year%4==0 && year%100!=0)||(year%400==0)){
        console.log("It‘s a leap year!");
    }
    else{
        console.log("It‘s not a leap year.")
    }
}

LeapYear(2020);
LeapYear(1900);
LeapYear(2000);
LeapYear(2023);
LeapYear(1600);
LeapYear(2024);
LeapYear(2008);
function vacation(budget, season){
    let totalSpent =0;
    let percentage =0;
    let typrOfHoliday = "Hotel";
    let place = "Asia";

    if(budget<=100){
        place = "Bulgaria";

        if (season == "summer"){
            percentage = 30;
            typrOfHoliday = "Camp";
        }
        else{
            percentage = 70;
        }       
    }
    else if(budget<=1000){
        place = "Europe";

        if (season == "summer"){
            percentage = 40;
            typrOfHoliday = "Camp";
        }
        else{
            percentage = 80;
        }       
    }
    else {
        percentage = 90;
    }

    totalSpent = (budget*percentage)/100;

    console.log(`Somewhere in ${place}`);
    console.log(`${typrOfHoliday} - ${totalSpent.toFixed(2)}`);
}

vacation(50, "summer");
vacation(75, "winter");
vacation(312, "summer");
vacation(678.53, "winter");
vacation(1500, "summer");
function hotel(days, typeOfRoom, assessment){
    const priceSingle = 25;
    const priceApartment = 50;
    const pricePresidential = 100;
    let amount =0;
    let total = 0;

    if (typeOfRoom == "apartment"){
        amount = priceApartment*(days-1);

        if (days<10){
            total=0.7*(amount);
        }
        else if (days<=15){
            total = 0.65*(amount);
        }
        else{
            total = 0.5*(amount)
        }
    }
    else if (typeOfRoom == "president apartment"){
        amount = pricePresidential*(days-1);

        if (days<10){
            total=0.9*(amount);
        }
        else if (days<=15){
            total = 0.85*(amount);
        }
        else{
            total = 0.8*(amount)
        }
    }
    else{
        total = priceSingle*(days-1);
    }

    if (assessment == "positive"){
        total+=0.25*total;
    }
    else{
        total-=0.1*total;
    }

    console.log(total.toFixed(2));
}

hotel(11, "apartment", "positive");
hotel(30, "president apartment", "negative");
hotel(12, "single room", "positive");
hotel(2, "apartment", "positive");
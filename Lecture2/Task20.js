function tiketPrice(age){
    let price = 0;
    if(age<13){
        price = 5;
    }
    else if(age<20){
        price = 8;
    }
    else{
        price = 10;
    }

    console.log(`$${price}`);
}

tiketPrice(10);
tiketPrice(16);
tiketPrice(25);
tiketPrice(13);
tiketPrice(12);
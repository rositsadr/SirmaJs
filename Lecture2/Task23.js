function discountCal(age, membership){
    let discount =0;

    if (age<18){
        discount = 10;
    }
    else if(age>17 && age<65){
        if(membership == "Yes"){
            discount = 20;
        }
        else {
            discount = 10;
        }
    }
    else{
        discount = 30;
    }
    
    console.log(`${discount}% discount`)
}

discountCal(20,"Yes");
discountCal(15,"No");
discountCal(70,"No");
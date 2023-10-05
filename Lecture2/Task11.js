function grocery(product, city, quantity){
    let price = 0;
    let total = 0;
    if(city == "Sofia"){
         price = product == "coffee" ? 0.50
                : product == "water" ? 0.80
                : product == "juice" ? 1.20
                : product == "sweets" ? 1.45
                : 1.50;
    }
    else if (city == "Plovdiv"){
        switch (product){
            case "coffee":
                price = 0.4;
                break;
            case "water":
                price = 0.7;
                break;
            case "juice":
                price = 1.15;
                break;
            case "sweets":
                price = 1.30;
                break;
            default:
                price = 1.50;
                break;                       
        }                 
    }
    else {
        switch (product){
            case "coffee":
                price = 0.45;
                break;
            case "water":
                price = 0.7;
                break;
            case "juice":
                price = 1.10;
                break;
            case "sweets":
                price = 1.35;
                break;
            default:
                price = 1.55;
                break;  
        }
    }

    total = price*quantity;
    console.log(total.toFixed(2));
}

grocery("juice", "Sofia", 6);
grocery("chips", "Plovdiv", 1);
grocery("coffee", "Varna", 2);
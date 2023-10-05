function market(vegetable, day, quantity){
    let price =-1;
    let total = 0;
    if (day == "Sunday" || day == "Saturday"){
        switch (vegetable){
            case "tomato":
                price = 2.50;
                break;
            case "onion":
                price = 1.20;
                break;
            case "lettuce":
                price = 0.85;
                break;
            case "cucumber":
                price = 1.45;
                break;
            case "pepper":
                price = 3.50;
                break;
            default:
                break;
        }
    }
    else if (day =="Monday"||day =="Tuesday"||day =="Wednesday"||day =="Thursday"||day =="Friday"){
        switch (vegetable){
            case "tomato":
                price = 2.80;
                break;
            case "onion":
                price = 1.30;
                break;
            case "lettuce":
                price = 0.85;
                break;
            case "cucumber":
                price = 1.75;
                break;
            case "pepper":
                price = 5.50;
                break;
            default:
                break;
        }
    }

    total= price*quantity;

    if (total<0)
{
    console.log("error");
}
else {
    console.log(total.toFixed(2));
}
}

market("tomato", "Tuesday", 2);
market("onion", "Sunday", 3);
market("pepper", "Monday", 10);
market("banana", "Friday", 5);
market("pepper", "BLABLA", 12);
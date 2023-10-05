function shop(renovationPrice, powders, lipsticks, spirals, shadows, correctors){
    const powder =2.60;
    const lipstick = 3;
    const spiral = 4.10;
    const shadow = 8.20;
    const corrector = 2;

    let totalOrder = powder*powders+lipstick*lipsticks+spiral*spirals+shadow*shadows+corrector*correctors;
    let count = powders+lipsticks+spirals+shadows+correctors;
    if (count>=50){
        totalOrder *= 0.75;
    }

    totalOrder *= 0.90;

    let remainingMoney = Math.abs(totalOrder-renovationPrice).toFixed(2);

    if (renovationPrice<=totalOrder){
        console.log(`Yes! ${remainingMoney} lv left.`);
    }
    else{
        console.log(`Not enough money! ${remainingMoney} lv needed.`)
    }
}

shop(40.8, 20, 25, 30, 50, 10);
shop(320, 8, 2, 5, 5, 1);
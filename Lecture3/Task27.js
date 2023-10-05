function coinsChange(amount){
    let twoLevCount=0;
    let oneLevCount=0;
    let fiftyCoinCount=0;
    let twentyCoinCount=0;
    let tenCoinCount=0;
    let fiveCoinCount=0;
    let twoCoinCount=0;
    let oneCoinCount=0;
    let sum=0;

    while(amount>0){
        if(amount-2>=0){
            twoLevCount++;
            amount-=2;
        }
        else if(amount-1>=0){
            oneLevCount++;
            amount-=1;
        }
        else if(amount-0.5>=0){
            fiftyCoinCount++;
            amount-=0.5;
        }
        else if(amount-0.2>=0){
            twentyCoinCount++;
            amount-=0.2;
        }
        else if(amount-0.1>=0){
            tenCoinCount++;
            amount-=0.1;
        }
        else if(amount-0.05>=0){
            fiveCoinCount++;
            amount-=0.05;
        }
        else if(amount-0.02>=0){
            twoCoinCount++;
            amount-=0.02;
        }
        else{
            oneCoinCount++;
            amount-=0.01;
        }
        sum++;
    }
    console.log(sum);
}

coinsChange(1.23);
coinsChange(2);
coinsChange(0.56);
coinsChange(2.73);

function smallestNumber(num1,num2,num3){
    let smallest=0;

    if(num1<=num2&&num1<=num3){
        smallest=num1;
    }
    else if(num2<num1&&num2<num3){
        smallest=num2;
    }
    else{
        smallest=num3;
    }

    console.log(smallest);
}

smallestNumber(2,5,3);
smallestNumber(600,342,123);
smallestNumber(25,4,21);
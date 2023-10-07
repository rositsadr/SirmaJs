function oddEvenSum(number){
    let digit=0;
    let sumOdd=0;
    let sumEven=0;

    while(number>0){
        digit=number%10;

        if (digit%2){
            sumOdd+=digit;
        }
        else{
            sumEven+=digit
        }

        number=Math.floor(number/10);
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);
oddEvenSum(0);
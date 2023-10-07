function factorialDevision(num1,num2){
    console.log((factorelCalc(num1)/factorelCalc(num2)).toFixed(2));
}

function factorelCalc(num){
    if(num<2){
        return 1;
    }
    else{
        return factorelCalc(num-1)*num;
    }
}

// function factorelCalc(num){
//     let result=1;
//     for (let i=num;i>0;i--){
//         result*=i;
//     }
//     return result;
// }

factorialDevision(5,2);
factorialDevision(6,2);
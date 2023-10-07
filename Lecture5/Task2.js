function sum(num1,num2){
    let output=num1+num2;
    return output;
}

function substract(num1,num2,num3){
    let output=sum(num1,num2);
    console.log(output-num3);
}

substract(23,6,10);
substract(1,17,30);
substract(42,58,100);
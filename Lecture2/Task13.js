function calculator(num1, num2, operation){
    let total = 0;
    switch(operation){
        case "add":
            total=num1+num2;
            break;
        case "subtract":
            total = num1-num2;
            break;
        case "divide":
            total = num1/num2;
            break;
        default:
            total = num1*num2;
            break;
    }
    console.log(total.toFixed(2));
}

calculator(5, 5, "add");
calculator(10, 12, "subtract");
calculator(9, 3, "divide");
calculator(5, 2, "divide");
calculator(3.1, 0.1, "multiply");
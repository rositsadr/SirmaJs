function calculate(numOne, numTwo){
    let sum = numOne+numTwo;
    let dif = Math.abs(numOne - numTwo);
    let pro = numOne*numTwo;
    let av = (numOne+numTwo)/2;

    console.log("Sum: " + sum);
    console.log("Difference: " + dif);
    console.log("Product: " + pro);
    console.log("Average: " + av);
}

calculate(25,5);
calculate(7,14);
calculate(12,1);

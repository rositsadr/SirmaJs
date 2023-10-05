function evenOrOdd(num){
    let a = num%2;
    let print = "odd";

    if (a==0){
        print = "even";
    }

    console.log(print);
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(25);
evenOrOdd(1024);
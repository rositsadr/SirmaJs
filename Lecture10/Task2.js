function* fibonacci() {
    let startNum=0;
    let secondNum=0;
    let fibonachiNum=1;

    while(true){
        yield (fibonachiNum);
        secondNum=fibonachiNum;
        fibonachiNum+=startNum;
        startNum=secondNum;
    }
}

const fib = fibonacci();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
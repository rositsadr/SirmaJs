function* primeNumberGenerator(){
    let startNum=1;

    while(true){
        let isPrime=true;
        for(let i=2; i<startNum;i++){
            if(startNum%i===0){
                isPrime=false;
            }
        }

        if(isPrime){
            yield startNum;
        }
        startNum++;
    }
}
const gen= primeNumberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
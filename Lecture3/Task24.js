function lines(num){
    const a=33;

    while(num>1){
        let digit = num%10;
        let line ="";
        let symbol=String.fromCharCode(digit+a);
        num = Math.floor(num/10);

        if(digit===0){
            line="ZERO";
        }
        else{
            for(let i=0;i<digit;i++){
                line+=symbol;
            }
        }
        console.log(line);
    }
}

lines(2049);
console.log();
lines(93417);
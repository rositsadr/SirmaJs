function specialNum(num){
    for(let i=1;i<10;i++){
        for(let j=1;j<10;j++){
            for(let m=1;m<10;m++){
                for(let n=1;n<10;n++){
                    if(num%i===0 && num%j===0 && num%m===0 && num%n===0){
                        console.log(i*1000+j*100+m*10+n);
                    }
                }
            }
        }
    }
}

specialNum(3);
specialNum(5);
function uniqueCode(num1Max,num2Max,num3Max){
    for(let i=2;i<=num1Max;i+=2){
        for(let j=2;j<=num2Max;j++){
            if(j!=4 && j!=6){
                for(let m=2;m<=num3Max;m+=2){
                    console.log(`${i}${j}${m}`);
                }
            }
        }
    }
}

uniqueCode(3,5,5);
uniqueCode(6,2,6);
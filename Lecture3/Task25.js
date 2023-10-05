function bank(coin1,coin2,lev5,sum){
    for(let i=0;i<=coin1;i++){
        for(let j=0;j<=coin2;j++){
            for(let m=0;m<=lev5;m++){
                let check =i*1+j*2+m*5; 
                if(check === sum){
                    console.log(`${i} * 1lv. + ${j} * 2lv. + ${m} * 5lv. = ${sum}`)
                }
            }
        }
    }
}

bank(3,2,3,10);
bank(5,3,1,7);
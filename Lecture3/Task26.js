function evenPairs(pair1,pair2,dif1,dif2){
    let value1=pair1+dif1;
    let value2=pair2+dif2;

    for(let i=pair1;i<=value1;i++){
        for(let j=pair2;j<=value2;j++){
            if((i%2&&i%3&&i%5&&i%7) && (j%2&&j%3&&j%5&&j%7))
            {
                let n=i*100 +j;
                console.log(n);
            }
        }
    }
}

evenPairs(10,20,5,5);
evenPairs(10,30,9,6);
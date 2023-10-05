function countingWompRats(n,m,h){  
    let totalCount=0;
    let increasePerHour=n;
    for(let i=1;i<=h;i++){
        totalCount+=increasePerHour;
        increasePerHour+=m;
    }
    console.log(totalCount);
}

countingWompRats(5,2,3);
countingWompRats(7,1,2);
countingWompRats(10,-1,1);
countingWompRats(8,-2,3);
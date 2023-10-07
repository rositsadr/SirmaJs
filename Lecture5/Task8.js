function perfectNum(num){
    let devisors=[];
    let sum=0;
    for(let i=1; i<num;i++){
        if(num%i===0){
            devisors.push(i);
            sum+=i;
        }
    }

    if(sum===num){
        console.log("Perfect number!");
        console.log(devisors.join(" + "))
    }
    else{
        console.log("It’s not so perfect.");
    }
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);
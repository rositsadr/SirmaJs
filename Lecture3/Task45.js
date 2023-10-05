function f(num1,num2){
    let counter=10;
    let isThereNum=false;

    for(let i=num1; i<=num2;i++){
        let num=i;
        let evenSum=0;
        let oddSum=0;
        for(let j=1;j<=6;j++){
            let digit=num%counter;
            num=Math.floor(num/counter);
            j%2?oddSum+=digit:evenSum+=digit;
        }

        if(oddSum===evenSum){
            console.log(i);
            isThereNum=true;
        }
    }

    if(!isThereNum){
        console.log("None");
    }
}

f(100000, 100050);
f(299900, 300000);
f(100115, 100120);
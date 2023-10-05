function evenSum(n){
    let sum=0;

    for(i=1; i<=n;i++){
        sum+=(2*i);
    }

    console.log(sum);
}

evenSum(3);
evenSum(5);
evenSum(1);
evenSum(0);
evenSum(10);
function fibonacci(n){
    let sum =0;
    let a=0;
    let b=1;
    let num=0;

        for(let i=0;i<n;i++){
            sum+=b;
            num = a;
            a=b;
            b=num+a;
        }

    console.log(sum);
}

fibonacci(3);
fibonacci(5);
fibonacci(1);
fibonacci(0);
fibonacci(10);

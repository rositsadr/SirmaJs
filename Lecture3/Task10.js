function f(n){
    let fact=1;

    if(n>0){
        for(let i=1;i<=n;i++){
            fact*=i;
        }
    }
    console.log(fact);
}

f(5);
f(3);
f(0);
f(1);
f(10);
function f(n){
    let sequence=n.toString();

    while(n>1){
        if(n%2===0){
            n/=2;
        }
        else{
            n=n*3+1;
        }
        sequence+=` ${n}`;
    }

    console.log(sequence);
}

f(6);
f(12);
f(9);
f(200);
f(15);
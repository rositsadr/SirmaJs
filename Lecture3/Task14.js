function f(n){
    let num = n.toString();
    let sum = 0;

    for(let i=0; i<num.length;i++){
        let m = parseInt(num[i]);
        sum+=Math.pow(m,3);
    }

    if (sum ===n){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

f(153);
f(370);
f(123);
f(407);
f(1634);
f(221);
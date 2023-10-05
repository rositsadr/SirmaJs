function f(input){
    let sumEven=0;
    let sumOdd=0;
    for (let i=0;i<input.length;i++){
        let a=parseInt(input[i]);

        if(a%2){
            sumOdd+=a;
        }
        else{
            sumEven+=a;
        }
    }

    console.log(sumEven-sumOdd);
}

f([1,2,3,4,5,6]);
f([3,5,7,9]);
f([2,4,6,8,10]);

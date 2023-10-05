function lastK(n,k){
    let arr=[1];
    for(let i =0; i<n-1;i++){
        let newElemnt=0;
        for(let j=i;j>i-k;j--){
            if(j<0){
                break;
            }
            else{
                newElemnt+=arr[j];
            }
        }
        arr.push(newElemnt);
    }

    console.log(arr.join(" "));
}

lastK(6,3);
lastK(8,2);
function reverseArray(n,input){
    let newArray=[];
    let j=0;
    for(let i =n-1; i>=0;i--){
        newArray[j]=input[i];
        j++;
    }

    console.log(newArray.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
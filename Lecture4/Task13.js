function negativePositive(arr){
    let negativeArr=arr.filter((number)=>number<0);
    let positiveArr = arr.filter((number)=>number>0);
    let zeroArr = arr.filter((number)=>number===0);
    let result = negativeArr.concat(positiveArr).concat(zeroArr);

    result.forEach(element => {
        console.log(element)
    }); 
}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1, 0]);
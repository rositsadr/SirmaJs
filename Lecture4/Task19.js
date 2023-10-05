function identicalElements(arr){
    let currCount=1;
    let count=0;
    let currNumber=0;
    let number= Number.MAX_SAFE_INTEGER;
    
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i]===arr[i-1]) {
            currCount++;
            currNumber=arr[i];
        }
            if(count<=currCount){
                count=currCount;
                number=currNumber
                currCount=1;
            }
    }

    console.log(number.toString().repeat(count));
}

//identicalElements([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
//identicalElements([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
//identicalElements([1, 1, 2, 3, 4, 5, 6, 2, 2]);
identicalElements([4, 4, 4, 4]);
identicalElements([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
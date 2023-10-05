function smallestNumber(arr){
    let small1=arr[0];
    let small2=arr[0];

    arr.forEach(element => {
        if(element<small1){
            if(small2>small1){
                small2=small1;
            }
            small1=element;
        }
    });

    console.log(`${small1} ${small2}`);
}

smallestNumber([30, 15, 50, 5]);
smallestNumber([3, 0, 10, 4, 7, 3]);
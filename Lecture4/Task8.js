function arrayToNum(arr){

    while(arr.length>1){
        let condenseArr=[];

        for (let i = 0; i < arr.length-1; i++) {
            condenseArr[i] = arr[i]+arr[i+1];         
        }

        arr=condenseArr.map((element)=>{
            return element;
        });
    }

    console.log(parseInt(arr));
}

arrayToNum([2,10,3]);
arrayToNum([5,0,4,1,2]);
arrayToNum([1]);

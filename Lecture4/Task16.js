function oddNumbers(arr){
    let output= [];
    arr.forEach(function(number,index){
        if(index%2) output.push(number);
    });
       ;

    console.log(output.map((number)=>2*number)
                    .reverse()
                    .join(" "));
}

oddNumbers([10, 15, 20, 25]);
oddNumbers([3, 0, 10, 4, 7, 3]);
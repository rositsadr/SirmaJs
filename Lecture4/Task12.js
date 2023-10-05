function filtration(arr){
    let firstDigit=arr[0];

    let a = arr.filter(function(number){
        if(number>=firstDigit){
            firstDigit=number;
            return number;
        } 
    });

    console.log(a.join(" "));
}

filtration([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
filtration([ 1, 2, 3, 4]);
filtration([ 20, 3, 2, 15, 6, 1]);
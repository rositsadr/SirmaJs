function kNumbers(k,arr){
    console.log(arr.slice(0,k).join(" "));

    console.log(arr.slice(arr.length-k,arr.length).join(" "));
}

kNumbers(2, [7, 8, 9]);
kNumbers(3, [6, 7, 8, 9]);
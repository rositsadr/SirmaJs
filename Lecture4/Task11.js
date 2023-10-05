function rotateArray(arr,n){
    let countRotation = n%arr.length;
    for (let i = 1; i <=countRotation ; i++) {
        arr.unshift(arr[arr.length-1]);
        arr.pop();
    }

    console.log(arr.join(" "));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
rotateArray(["Ann","Marry","Susy"],0);
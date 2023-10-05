function reverseArray(input){
    //let newArray=[];
    //let j=0;
    //for(let i =input.length-1; i>=0;i--){
    //    newArray[j]=input[i];
    //    j++;
    //}

    for (let i=0;i<input.length/2;i++){
        let a=input[i];
        input[i]=input[input.length-1-i];
        input[input.length-1-i]=a;
    }

    console.log(input.join(" "));
}

reverseArray(['a', 'b', 'c', 'd', 'e']);
reverseArray(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArray(['33', '123', '0', 'dd']);
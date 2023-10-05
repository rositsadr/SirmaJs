function addRemove(arr){
    let initialNumber=1;
    let output=[];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==='add'){
            output.push(initialNumber);
            initialNumber++; 
        }
        else{
            output.pop();
        }       
    }

    if(output.length===0){
        console.log("Empty")
    }
    else{
        console.log(output.join(" "));
    }
}

addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);
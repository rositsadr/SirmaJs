function equalArrays(input1,input2){
    let sum=0;
    let isEqual=true;

    for(let i=0;i<input1.length;i++){
        if (input1[i] === input2[i]){
            sum+=parseInt(input1[i]);
        }
        else{
            isEqual=false;
        }
        if(!isEqual){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);
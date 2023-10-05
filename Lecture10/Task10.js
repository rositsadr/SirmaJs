function* arrayFlattenGenerator(nestedArr){
    for (let i=0;i<nestedArr.length;i++){
        for(let j=0; j<nestedArr[i].length;j++){
            yield nestedArr[i][j];
        }
    }
}

const outPut=arrayFlattenGenerator(['a',['b','c'], ['d','e']]);
console.log(...outPut);
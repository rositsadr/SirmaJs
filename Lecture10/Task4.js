function* createRange(startNum,endNum){
    for (let i=startNum;i<=endNum;i++){
        yield i;
    }
}

const rangeGen = createRange(2, 6);
console.log(rangeGen.next().value);
console.log(rangeGen.next().value);
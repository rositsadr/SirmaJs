function excelSum(input,comand){
    let range=comand.split(":");
    let startColumn="A1".match(/[A-Z]+/)[0].charCodeAt(0)-65;
    let startRow=parseInt(range[0].match(/[0-9]+/)[0])-1;
    let endColumn=range[1].match(/[A-Z]+/)[0].charCodeAt(0)-65;
    let endRow=parseInt(range[1].match(/[0-9]+/)[0])-1;
    let sum=0;
    for(let row=startRow; row<=endRow; row++){
        for(let column=startColumn; column<=endColumn; column++){
            sum+=input[row][column];
        }
    }

    console.log(sum);
}

excelSum([[1, 2, 3],[4, 5, 6],[7, 8, 9]],"A1:C2");
excelSum([[0, 1, 0, 0],[0, 0, 0, 1],[1, 0, 0, 0],[0, 1, 0, 0]],"A1:B4");

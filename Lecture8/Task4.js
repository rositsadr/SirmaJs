function sumMatrix(matrix){
    let columnCount=0;
    let sum=0;
    let rowCount=matrix.length;
    for(let row=0;row<matrix.length;row++){
        if(columnCount===0){
            columnCount=matrix[row].length;
        }
        for(let column=0;column<matrix[row].length;column++){
            sum+=matrix[row][column];
        }
    }
    console.log(rowCount);
    console.log(columnCount);
    console.log(sum);

}

sumMatrix([[7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0]]);
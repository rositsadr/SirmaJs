function boundrySum(matrix){
    let sum=0;
    for(let row=0;row<matrix.length;row++){
        for(let column=0;column<matrix[row].length;column++){
            if(row===0 || row===matrix.length-1 || column===0 || column===matrix[row].length-1){
               sum+= matrix[row][column];
            }
        }
    }

    console.log(sum);
}

boundrySum([[1, 2, 3],[4, 5, 6],[7, 8, 9]]);
boundrySum([[1, 2, 3, 0],[4, 5, 6,7],[0, 8, 9, 1]]);
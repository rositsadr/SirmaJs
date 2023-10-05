function submatrixMaxSum(matrix){
    let sum=0;
    let currSum=0;
    const matrixResult=[];
    for(let row=0;row<matrix.length-1;row++){
        for(let column=0;column<matrix[row].length-1;column++){
            currSum = matrix[row][column]+matrix[row+1][column]+matrix[row][column+1]+matrix[row+1][column+1];

            if(sum<currSum){
                sum=currSum;
                let a = matrix[row][column+1];
                matrixResult[0]=[matrix[row][column], matrix[row][column+1]];
                matrixResult[1]=[matrix[row+1][column], matrix[row+1][column+1]];
            }
        }
    
    }

    console.log(sum);
    matrixResult.forEach(row=>{
        console.log(row.join(" "));
    })

}

submatrixMaxSum([[7, 1, 3, 3, 2, 1], [1, 3, 9, 8, 5, 6], [4, 6, 7, 9, 1, 0]]);
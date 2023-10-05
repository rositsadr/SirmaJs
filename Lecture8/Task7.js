function PrintDiagonals(matrix){
    let diagonal1Sum=0;
    let diagonal2Sum=0;
    for(let row=0;row<matrix.length;row++){
        for(let column=0;column<matrix[row].length;column++){
            if(row===column){diagonal1Sum+=(matrix[row][column]);}
            if((row+column)===matrix.length-1){diagonal2Sum+=(matrix[row][column]);}
        }
    }

    console.log(diagonal1Sum + diagonal2Sum);
} 

PrintDiagonals([[1, 2, 3],
[1, 2, 3],
[1, 2, 3]]);
PrintDiagonals([[1, 2, 3, 2],
[1, 1, 2, 4],
[1, 2, 1, 4],
[2, 2, 3, 1]]);
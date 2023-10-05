function PrintDiagonals(matrix){
    let diagonal1=[];
    let diagonal2=[];
    for(let row=0;row<matrix.length;row++){
        for(let column=0;column<matrix[row].length;column++){
            if(row===column){diagonal1.push(matrix[row][column]);}
            if((row+column)===matrix.length-1){diagonal2.push(matrix[row][column]);}
        }
    }

    console.log(diagonal1.join(" "));
    console.log(diagonal2.join(" "));
} 

PrintDiagonals([[1, 2, 3],
[1, 2, 3],
[1, 2, 3]]);
PrintDiagonals([[1, 2, 3, 2],
[1, 1, 2, 4],
[1, 2, 1, 4],
[2, 2, 3, 1]]);
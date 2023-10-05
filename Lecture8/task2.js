function matrixAddition(matrix1,matrix2){
    const matrix3=[];
    for(let row=0;row<matrix1.length;row++){
        matrix3[row]=[];
        for(let column=0;column<matrix1[row].length;column++){
            matrix3[row][column]=matrix1[row][column]+matrix2[row][column];
        }
    }

    matrix3.forEach(row=>{
        console.log(row.join(" "));
    })

}

matrixAddition([[1,2],[3,4]], [[2,2],[2,2]]);
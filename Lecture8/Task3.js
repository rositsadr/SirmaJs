function intersectionOfMatreces(matrix1,matrix2){
    const matrix3=[];
    for(let row=0;row<matrix1.length;row++){
        matrix3[row]=[];
        for(let column=0;column<matrix1[row].length;column++){
            if(matrix1[row][column]===matrix2[row][column]){
                matrix3[row][column]=matrix1[row][column];
            }
            else{
                matrix3[row][column]="*";
            }

        }
    }

    matrix3.forEach(row=>{
        console.log(row.join(" "));
    })
}

intersectionOfMatreces(["a b c d","a b c d","a b c d"],
                        ["k b c k","a b g d","a k c d"]);

intersectionOfMatreces(["1 2","3 4","5 6","7 8","9 1"],
                        ["0 2","3 1","1 6","7 4","1 1"]); 
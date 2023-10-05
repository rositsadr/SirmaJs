function zeroMatrix(matrix){
    let zeroPosition=[];
    for(let row=0;row<matrix.length;row++){
        for(let column=0;column<matrix[row].length;column++){
            if(matrix[row][column]===0){
                zeroPosition.push([row,column]);
            }
        }
    }

    if(zeroPosition.length>0){
        zeroPosition.forEach(position=>{
            let zeroRow=position[0];
            let zeroColumn=position[1];

            for(let row=0;row<matrix.length;row++){
                for(let column=0;column<matrix[row].length;column++){
                    if(row===zeroRow || column===zeroColumn){
                        matrix[row][column]=0;
                    }
                }
            }
        })
    }

    console.log(matrix);
}

zeroMatrix([[1, 2, 3], [4, 0, 6], [7, 8, 9]]);
zeroMatrix([[1, 2, 3, 0], [4, 5, 6, 7], [0, 8, 9, 1]]);
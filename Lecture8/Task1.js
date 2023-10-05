function compareMtrix(matrix1,matrix2){
    let equal=true;
    if(matrix1.length != matrix2.length){
        equal=false;
    }
    else{
        for(let row=0;row<matrix1.length;row++){
            if(matrix1[row].length != matrix2[row].length){
                equal=false;
            }
            else{
                for(let column=0;column<matrix1[row].length;column++){
                    if(matrix1[row][column]!=matrix2[row][column]){
                        equal=false;
                    }
                }
            }
        }
    }

    equal?console.log("equal"):console.log("not equal");

}

compareMtrix([[1,2,3],[2,1,3]],
            [[1,2,3],[2,1,3]]);

compareMtrix([[1,2,3],[4,5,6]],
            [[1,3],[4,6]]);
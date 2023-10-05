function snail(matrix){
    let size=matrix.length;
    let newMatrix=Array(size).fill().map(()=>Array(size).fill());

    for(let i=0; i<size; i++){
        for(let j =0; j<size; j++){
            let ii=j;
            let jj=size-i-1;
            console.log(matrix[i][j]);
            newMatrix[ii][jj]=matrix[i][j];
        }
    }

    for(let i=0; i<matrix.length; i++){
        console.log(newMatrix[i].join(" "));
    }

}

snail([[1, 2, 3],[4, 5, 6],[7, 8, 9]]);
snail([[0,1, 2, 3],[4, 5, 6,7],[8, 9, 10, 11],[12,13,14,15]]);
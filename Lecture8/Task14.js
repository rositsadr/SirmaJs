function chessBoard(matrix){
    const newMatrix=[];
    let isThreaten= false;

    for(let row=0; row<matrix.length; row++){
        for(let column=0; column<matrix[row].length; column++){
            if(matrix[row][column]===1){
                if(newMatrix.find((val)=> val[0]===row || val[1]===column)){
                    isThreaten=true;
                    break;
                }

                if(newMatrix.find((val)=>Math.abs(val[0]-row)===Math.abs(val[1]-column))){
                    isThreaten=true;
                    break;
                }
                newMatrix.push([row,column]);               
            }
        }
    }

    if(isThreaten){
        console.log("Yes");
    }
    else{
        console.log("No");
    }

}

chessBoard([[0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
            [1, 0, 0, 0]]);
chessBoard([[0, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 0]]);
chessBoard([[0, 1, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [1, 0, 0, 0]]);

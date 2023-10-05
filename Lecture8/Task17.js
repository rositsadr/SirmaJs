const input1=[[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const input2=[[1, 0, 0, 0],[0, 0, 0, 1],[0, 1, 0, 0],[0, 0, 1, 0]];
const input3=[[8, 1, 6],[3, 5, 7],[4, 9, 2]];

function magicSquare(input){
    let rowSum=0;
    let columnSum=0;
    let diagonalSum=0;
    let revurceDiagSum=0;
    let isMagic=true;

    for(let row=0;row<input.length;row++){
        let currRowSum=0;
        let currColSum=0;
        for(let column=0; column<input.length;column++){
            currRowSum+=input[row][column];
            currColSum+=input[column][row];

            if(row===column){
                diagonalSum+=input[row][column];
            }

            if(row===(input.length-column-1)){
                revurceDiagSum+=input[row][column];
            }
        }
        
        columnSum=columnSum===0?currColSum:columnSum;
        rowSum=rowSum===0?currRowSum:rowSum;

        if(rowSum!==currRowSum || columnSum!==currColSum || rowSum!==columnSum){
            isMagic=false;
            break;
        }
    }

    if(revurceDiagSum!==diagonalSum || diagonalSum!==rowSum){
        isMagic=false;
    }

    console.log(isMagic);
}

magicSquare(input1);
magicSquare(input2);
magicSquare(input3);
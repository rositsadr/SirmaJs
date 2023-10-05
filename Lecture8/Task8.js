function matrixPattern(size,pattern){
    if(pattern === "A"){
       console.log( patternA(size));
    }

    if(pattern=== "B"){
        console.log(patternB(size));
    }
}

function patternA(size){
    let matrix=[];
    for(let row = 0;row<size;row++){
        let num=row+1;
        matrix[row]=[];
        for(let column = 0;column<size;column++){
            matrix[row][column]=num;
            num+=size;
        }
    }
    return matrix;
}

function patternB(size){
    let matrix=[];
    let num=1;
    let column=0;
    for(let row=0; row<size;row++){
        matrix[row]=[];
    }

    while (num<=size*size){
        for(let row = 0;row<size;row++){
            matrix[row][column]=num;
            num++;
        }
        column++;
        if(num>=size*size){
            break;
        }
        for(let row = size-1;row>=0;row--){
            matrix[row][column]=num;
            num++;
        }
        column++;
    }

    return matrix;
}

matrixPattern(3, "A");
matrixPattern(3, "B");
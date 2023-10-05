function rowColumnSum(matrix){
    const rowSums=[];
    const columnSums=[];
    for (let row =0;row<matrix.length;row++){
        let sum=0;
        for(let column =0; column<matrix[row].length; column++){
            sum+=(matrix[row][column]);
        }
        rowSums.push(sum);
    }
    for (let column =0;column<matrix[0].length;column++){
        let sum=0;
        for(let row =0; row<matrix.length; row++){
            sum+=matrix[row][column];
        }
        columnSums.push(sum);
    }

    console.log(`Row Sums: ${rowSums}\nColumn Sums: ${columnSums}`);
}

rowColumnSum([[1, 2],[3, 4],[5, 6]]);
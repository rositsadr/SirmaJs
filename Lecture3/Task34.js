function squareFrame(n){
    for(let i=0;i<n;i++){
        let line="";
        for(let j=0; j<n;j++){
            if((i===j&& j===0) || (i===j && j===(n-1)) || (i===0 && j===(n-1)) ||(j===0 && i===(n-1))){
                line+="+ ";
            }
            else if(j===0 || j===n-1){
                line+="| ";
            }
            else{
                line+="- ";
            }
        }
        console.log(line);
    }
}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(1);
function rumbos(n){
    let lineLength=((n)*2 -1);
    for(let i=0; i<=n;i++){
        let line ="";
       for(let j=0;j<=lineLength;j++){
            if(i===n){
                if(j===n){
                    line+="*";
                     }
                else{
                    line+=" ";
                }
            }
            else{
                if(j>=n-i && j<=n+i){
                    line+="*";
                     }
                    else{
                    line+=" ";
                    }
            }
        }
        console.log(line);
    }
    
}

rumbos(5);
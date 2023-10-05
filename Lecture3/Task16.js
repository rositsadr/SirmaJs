function pattern(n,m){
    for(let i=0; i<n;i++){
        let print = "";       
            for(let j=0; j<m; j++){
                if(i===0 || i===n-1 || j===0||j===m-1){
                    print+="*";
                }
                else
                {
                    print+=" ";                   
                }
            }
        console.log(print);
    }
}

pattern(3,4);
pattern(3,7);
pattern(5,4);
pattern(8,5);
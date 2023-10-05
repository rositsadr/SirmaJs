function rombus(n){
    for(let i=1;i<n*2;i++){
        let line="";
        if(i<=n){
            for(let j=1;j<=i;j++){
                line+="* ";
            }
        }
        else{
            for(let j=n*2-i;j>0;j--){
                line+="* ";
            }
        }

        console.log(line);
    }
}

rombus(4);
rombus(1);
rombus(2);
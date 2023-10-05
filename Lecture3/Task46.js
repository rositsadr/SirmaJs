function passwordGenerator(n,l){
    let pasword="";
    for(let i=1;i<=n;i++){
        for(let j=1;i<=n;j++){
            for(let a=97;a<(97+l);a++){
                for(let b=97;b<(97+l);b++){
                    for(let c=1;c<=n;c++){
                        if(c>i && c>j){
                            pasword=i.toString()+j.toString()+String.fromCharCode(a)+String.fromCharCode(b)+c;
                            console.log(pasword);
                        }
                    }
                }
            }
        }
    }
}

passwordGenerator(2,4);
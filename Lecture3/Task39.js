function arrowPatern(n){
    let lineLength=((n-1)*2 -1);
    for(let i=0; i<n-1;i++){
        let line ="";
        let j =-i;
        for (let m = 1; m <=lineLength; m++) {
            if(m===(Math.ceil(lineLength/2) +j)){
                line+="*";
                j+=2;
                if(j>i)break;
            }
            else{
                line+=" ";
            }
        }
        console.log(line);

    }

    let dotCount=0;
    let numberOfSpaces=0;
    if (n%2){
        dotCount=n-2;
        numberOfSpaces=(dotCount+1)/2; 
    }
    else{
        dotCount=n-1;
        numberOfSpaces=(dotCount-1)/2;
    }

    for(let i=0; i<n-1;i++){
        let line="";
        for(let j=1;j<=lineLength;j++){
            if(j> numberOfSpaces && j<=(lineLength-numberOfSpaces)){
                line+="*";
            }
            else{
                line+=" ";
            }
        }
        console.log(line);
    }
}

arrowPatern(3);
arrowPatern(5);
arrowPatern(7);
arrowPatern(8);
arrowPatern(6);
arrowPatern(10);
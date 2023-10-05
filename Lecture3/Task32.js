function rumbos(n){
    let lineLength=((n)*2 -1);
    for(let i=0; i<n;i++){
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
}

rumbos(3);
function piramid(num){
    let toPrint=1;
    let row=1;
    while(toPrint<=num){
        let text="";
        for(let i=1;i<=row;i++){
            if(toPrint>num){
                break;
            }
            text+=`${toPrint}`;
            toPrint++;
        }
        row++;
        console.log(text);
    }
}

piramid(7);
piramid(10);
piramid(15);
function magicNumber(start, end, magicNum){
    let combination = 0;
    let isMagic=false;
    for(let i=start; i<=end;i++){
        for(let j=start; j<=end;j++){
            combination++;
            if(i+j===magicNum){
                console.log(`Combination ${combination} - (${i} + ${j} = ${magicNum})`);
                isMagic=true;
                break;
            }
        }
        if(isMagic) break;
    }

    if(
        !isMagic){
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}

magicNumber(1,10,5);
magicNumber(23,24,20);
magicNumber(1,2,3);
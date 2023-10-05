function starBattlesEnigma(inputArr){
    let codeKey=0;
    let attackedPlanets=0;
    let destroyedPlanets=0;
    let attackedPlanetsNames=[];
    let destroyedPlanetsNames=[];

    for(let i=0; i<inputArr.length; i++){
        let output="";
        codeKey=inputArr[i].match(/[s|t|a|r]/gi).length;
        for(let j=0; j<inputArr[i].length; j++){
            let newSymbol=String.fromCharCode(inputArr[i][j].charCodeAt()-codeKey);
            output+=newSymbol;
        }
        let planetName=output.match(/@[A-Za-z]+/);
        let planetPopulation=output.match(/:\d+/);
        let planetAttak=output.match(/![A|D]{1}!/);
        let solgiersCount=output.match(/->\d+/);
        if(planetName!==null && planetPopulation!==null && planetAttak!==null && solgiersCount!==null){
            let name=planetName[0].replace("@","");
            if(planetAttak[0].includes("A")){
                attackedPlanets++;
                attackedPlanetsNames.push(name);
            }
            else{
                destroyedPlanets++;
                destroyedPlanetsNames.push(name);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets}`);
    attackedPlanetsNames.forEach(planetName=>{
        console.log(`-> ${planetName}`);
    });

    console.log(`Destroyed planets: ${destroyedPlanets}`);
    destroyedPlanetsNames.forEach(planetName=>{
        console.log(`-> ${planetName}`);
    });
}

//starBattlesEnigma(['STCDoghudd4=53333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starBattlesEnigma(["tt(''DGsvywgerx>6444444444%H%1B9444",'GQhrr|A977777(H(TTTT','EHfsytsnhf?8555&I&2C9555SR']);
function balancedLightsaberDuels(input){
    let isLegendary=true;

    let newInput = input.split("!!");
    newInput=newInput.join("");
    
    if(newInput.includes("!")){
        isLegendary=false;
    }
    else{
        newInput=newInput.split("()");
        newInput=newInput.join("");
        for(let i=0; i<newInput.length/2;i++){
            if(newInput[i]==="("){
                if(newInput[newInput.length-1-i]!==")"){
                    isLegendary=false;
                    break;
                }
            }
            else if(newInput[i]==="{"){
                if (newInput[newInput.length-1-i]!=="}"){
                    isLegendary=false;
                    break;
                }
            }
        }
    }

    if(isLegendary){
        console.log("Legendary");
    }
    else{
        console.log("Not Legendary");
    }
}

//balancedLightsaberDuels("()()(()())");
//balancedLightsaberDuels("((!!)(({!!})))");
//balancedLightsaberDuels("((())");
balancedLightsaberDuels("{!}!")
//balancedLightsaberDuels("({(!!}))");
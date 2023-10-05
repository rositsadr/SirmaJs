function pascalCaseFormatSplitter(text){
    let word="";
    let output=[];
    let startIndex=0;
    for(let i=1; i<text.length; i++){
        if((text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90)){
            word = text.substring(startIndex,i);
            output.push(word);
            startIndex=i;
        }

        if(i===text.length-1){
            output.push(text.substring(startIndex));
        }
    }

    console.log(output.join(", "));
}

pascalCaseFormatSplitter('SplitMeIfYouCan');
pascalCaseFormatSplitter('HoldTheDoor');
pascalCaseFormatSplitter('ThisIsSoAnnoyingToDo');
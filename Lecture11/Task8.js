function replaceRepeatingSymbols(text){
    let output="";
    let helperLetter="";
    for(let i=0;i<text.length;i++){
        if(helperLetter!=text[i]){
            helperLetter=text[i];
            output+=helperLetter;
        }
    }

    console.log(output);
}

replaceRepeatingSymbols('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingSymbols('qqqwerqwecccwd');
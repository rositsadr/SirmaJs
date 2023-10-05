function findWord(word,text){
    let wordFound=false;
    let input=text.toLowerCase().split(" ");

    for(let i=0; i<input.length; i++){
        if(input[i] === word.toLowerCase() && !wordFound){
            wordFound=true;
            console.log(input[i]);
            break;       
        }      
    };

    if(!wordFound){
        console.log(`${word} not found!`)
    }

}

findWord('javascript', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');
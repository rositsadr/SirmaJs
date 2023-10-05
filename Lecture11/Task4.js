function revealWords(words,text){
    let wordsArr=words.split(", ");
    for (let i=0; i<wordsArr.length; i++){
        let starWord="*".repeat(wordsArr[i].length);
        text=text.replace(starWord,wordsArr[i]);
    }
    console.log(text);
}


revealWords('great','JavaScript* is ***** programming language');
revealWords('the, best, learn','JavaScript is *** **** language to *****');
function cenzor(text, word){
    let replasedWord="*".repeat(word.length);

    while(text.includes(word)){
        text=text.replace(word,replasedWord);
    }
    console.log(text);
}


cenzor('A small sentence with some words','small');
cenzor('Find the hidden word', 'hidden');
cenzor('A small sentence with small words', 'small');
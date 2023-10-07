function shortestLongestWord(text){
    let words = text.trim().split(" ");//remove if eny empty spaces in the begining and in the end, then split.
    let minLength=Number.MAX_SAFE_INTEGER;
    let maxLength=Number.MIN_SAFE_INTEGER;
    let minWord="";
    let maxWord="";
    words.forEach(word => {
        word = word.replace(/\W/,"");//replace any nonword with ""
        if(word.length>maxLength){
            maxLength = word.length;
            maxWord = word;
        }
        else if(word.length<minLength){
            minLength = word.length;
            minWord = word;
        }
    });

    console.log(`Longest -> ${maxWord}`);
    console.log(`Shortest -> ${minWord}`);
}

shortestLongestWord('Hello how are you today? I hope you are fine ');
shortestLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');
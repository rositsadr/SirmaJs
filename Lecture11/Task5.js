function hashTag(text){
    let input=text.split(" ");
    let testRegex=/[A-Z,a-z]+/;

    for(let i=0; i<input.length; i++){
        let word=input[i];
        if(word[0]==="#" && word.length>1){//word.startsWith("#")
            if(testRegex.test(word)){
                console.log(word.replace("#",""));
            }
        }
    }
}

hashTag("Everyone uses # to tag a #special word in #facebook");
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
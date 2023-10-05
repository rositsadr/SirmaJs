function polindrom(text){
    let isSame=true;
    for(let i=text.length-1;i>=0;i--){
        if (text[i]!=text[(text.length-1-i)]){
            isSame=false;
            break;
        }
    }

    console.log(isSame);
}

polindrom("radar");
polindrom("hello");
polindrom("racecar");
polindrom("java");
polindrom("madam");
polindrom("daad");
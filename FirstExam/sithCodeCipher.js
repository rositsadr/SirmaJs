function sithCodeCipher(input, n){
    let translatedMessage="";
    for(let i=0;i<input.length;i++){
         let digitCheck=/\d/;
         let letterCheck=/[a-z]/;
        if(digitCheck.test(input[i])){
            translatedMessage+=(parseInt(input[i])+n);
        }
        else if(letterCheck.test(input[i].toLowerCase())){
            let newLetterNumber=input.charCodeAt(i)-n;
            if (newLetterNumber<65 || (newLetterNumber>90 && newLetterNumber<97)){
                newLetterNumber+=26;
            }
            translatedMessage+=String.fromCharCode(newLetterNumber);
        }
        else{
            translatedMessage+=input[i];
        }
    }

    console.log(translatedMessage);
}

sithCodeCipher("Uifsf jt b tdifsu", 1);
sithCodeCipher("Dagobah", 3);
sithCodeCipher("R2-D2", 5);
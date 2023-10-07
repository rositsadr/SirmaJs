function passwordValidator(password){
    let count = countDigit(password);

    if(password.length>=6 && password.length<=10 && count>=2 && onlyLettersAndDigits(password)){
        console.log("Password is valid")
    }
    else{
        if(password.length<6 || password.length>10){
            console.log('Password must be between 6 and 10 characters')
        }
        if(!onlyLettersAndDigits(password)){
            console.log('Password must consist only of letters and digits')
        }
        if(count<2){
            console.log('Password must have at least 2 digits')
        }
    }
}

function countDigit(text){
    let counter=0;
    for (let i = 0; i < text.length; i++) {
        let a=parseInt(text[i]);
       if(a>=0 && a<=9){
        counter++;
       }
    }
    return counter;
}

function onlyLettersAndDigits(text){
   return /^[A-Za-z0-9]*$/.test(text);
}

passwordValidator('pass');
passwordValidator('APass123');
passwordValidator('Pa$s$s');
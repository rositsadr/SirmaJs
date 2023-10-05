//function reversal(num){
//    let numToWord = num.toString();
//    let reverse='' ;
//    for(i=numToWord.length-1;i>=0;i--){
//        reverse+=numToWord[i];
//    }
//
//    console.log(reverse);
//}

function reversal(num){
    let result=0;

    while (num>0){
        let digit = num%10;
        result = result*10+digit;
        num=parseInt(num/10);
    }

    console.log(result);
}

reversal(123);
reversal(9876);
reversal(505);
reversal(10203);
reversal(7);
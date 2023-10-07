function palindromeNumbers(arr){
    // for(let i=0; i<arr.length;i++){
    //     let text=arr[i].toString();
    //      let isPalindrome=true;
    //       for(let i=0;i<(text.length/2);i++){
    //           if(text[i]!==text[text.length-1-i]){
    //               isPalindrome=false;
    //               break;
    //           }
    //       }
    //      console.log(isPalindrome.toString());
    // }
    
     arr.forEach(element => {
         let text=element.toString();
         let isPalindrome=true;
        for(let i=0;i<(text.length/2);i++){
            if(text[i]!==text[text.length-1-i]){
                isPalindrome=false;
                break;
            }
        }
         console.log(isPalindrome.toString());
     });
}

palindromeNumbers([123,323,421,121]);
    palindromeNumbers([32,2,232,1010]);
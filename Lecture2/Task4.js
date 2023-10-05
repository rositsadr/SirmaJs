function numbersInWords(num){
   let print= "Number is too small!";
    if (num>=0){
        switch(num){
            case 0:
                print = "Zero";
                break;
            case 1:
                print = "One";
                break;
            case 2:
                print = "Two";
                break;
            case 3:
                print = "Three";
                break;
            case 4:
                print = "Four";
                break;
            case 5:
                print = "Five";
                break;
            case 6:
                print = "Six";
                break;
            case 7:
                print = "Seven";
                break;
            case 8:
                print = "Eight";
                break;
            case 9:
                print = "Nine";
                break;
            default:
                print = "Number is too big";
        }
    } 
   console.log(print);
}
numbersInWords(0);
numbersInWords(-1);
numbersInWords(5);
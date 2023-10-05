function dayOfWeek (num){
    let print;

    switch(num){
        case 1:
            print = "Monday";
            break;
        case 2:
            print = "Tuesday";
            break;
        case 3:
            print = "Wednesday";
            break;
        case 4:
            print = "Thursday";
            break;
        case 5:
            print = "Friday";
            break;
        case 6:
            print = "Saturday";
            break;
        case 7:
            print = "Sunday";
            break;
        default:
            print = "Error";
    }

    console.log(print);
}

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);
dayOfWeek(-1);
function speed(v){
    let print;

    if (v<=10){
        print = "slow";
    }
    else if (v<=60){
        print = "average";
    }
    else if(v<=120){
        print = "fast";
    }
    else if(v<=160){
        print = "super-fast";
    }
    else{
        print = "turbo-fast";
    }

    console.log(print);
}

speed(10);
speed(59);
speed(120);
speed(121);
speed(183);
speed(0);
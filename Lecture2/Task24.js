function classification(age){
    if (age<13){
        console.log("Only U-rated movies");
    }
    else if (age<18){
        console.log("U and PG-13 rated movies");
    }
    else{
        console.log("All movies");
    }
}

classification(10);
classification(16);
classification(21);
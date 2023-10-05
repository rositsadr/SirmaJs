function title (age,sex){
    let output;

    if(sex == "f"){
        if (age<16){
            output = "Miss";
        }
        else{
            output = "Ms."
        }
    }
    else
    {
        if(age<16){
            output="Master";
        }
        else{
            output="Mr.";
        }
    }

    console.log(output);
}

title(14, "f");
title(17, "m");
title(10, "m");
title(32, "f");
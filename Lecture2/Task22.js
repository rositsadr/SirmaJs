function admission(score, activities){
    if (score>= 90 ||(score>=80 && activities>=2)){
        console.log("Admitted");
    }
    else{
        console.log("Not admitted");
    }
}

admission(85,3);
admission(88,1);
admission(91,0);
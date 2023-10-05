function gradeCalculator(score){
    let grade;
    if (score<60){
        grade ="F";
    }
    else if (score<70){
        grade = "D";
    }
    else if (score<80){
        grade = "C";
    }
    else if (score<90){
        grade = "B";
    }
    else {
        grade = "A";
    }

    console.log(grade);
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);
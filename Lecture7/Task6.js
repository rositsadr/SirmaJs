class Grade{
    #studentNames=[];// лист от имената в него
    grade=0;//класа
    #score=0;//обща оценка за мин. година

    constructor(grade){
        this.grade = grade
    }

    addStudent(name){
        this.#studentNames.push(name);
    }

    averageLastYearScore(){
        return (this.#score/this.#studentNames.length).toFixed(2);
    }

    addToTheScore(score){
        this.#score+=score;
    }

    toString(){
        return this.#studentNames.join(", ");
    }
}

function schoolBook(arrInfo){
    const book=[];
    arrInfo.forEach(info => {
        let studentInfo = info.split(", ");
        studentName = studentInfo[0].split(": ")[1];
        studentGrade = parseInt(studentInfo[1].split(": ")[1])+1;
        averageScore = parseFloat(studentInfo[2].split(": ")[1]);

        if(averageScore>=3){
            if(!book.find(item=>item.grade === (studentGrade))){
                book.push(new Grade(studentGrade));
            }

            book.forEach(gradeItem =>{
                if (gradeItem.grade === studentGrade){
                    gradeItem.addStudent(studentName);
                    gradeItem.addToTheScore(averageScore);
                }
            })
        }       
    });

    //book.sort((item)=>item.grade);
    //console.log();
    book.sort((a,b)=>a.grade-b.grade).forEach(gradeItem => {
        console.log(`${gradeItem.grade} Grade`);
        console.log(`List of students: ${gradeItem.toString()}`);
        console.log(`Average annual score from last year: ${gradeItem.averageLastYearScore()}`);
        console.log("===");
    })
}

// schoolBook([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ])

schoolBook(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
'Student name: John, Grade: 9, Graduated with an average score: 2.90',
'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])


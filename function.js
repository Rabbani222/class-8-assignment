



function Result(Mark,Name,Roll,Age,Class_Number) {
    let gpa = (marks) => {
    let gpa;

    if (marks >=0 && marks < 32) {
        gpa = 0;
    }else if (marks >=33 && marks < 40) {
        gpa = 1;
    }else if (marks >=40 && marks < 50) {
        gpa = 2;
    }else if (marks >=50 && marks < 60) {
        gpa = 3;
    }else if (marks >=60 && marks < 70) {
        gpa = 3.5;
    }else if (marks >=70 && marks < 80) {
        gpa = 4;
    }else if (marks >=80 && marks <= 100) {
        gpa = 5;
    }

    return  gpa;
}

 let grade = (marks) => {
    let grade;

    if (marks >=0 && marks < 32) {
        grade = 'F';
    }else if (marks >=33 && marks < 40) {
        grade = 'D';
    }else if (marks >=40 && marks < 50) {
        grade = 'C';
    }else if (marks >=50 && marks < 60) {
        grade = 'B';
    }else if (marks >=60 && marks < 70) {
        grade = 'A-';
    }else if (marks >=70 && marks < 80) {
        grade = 'A';
    }else if (marks >=80 && marks <= 100) {
        grade = 'A+';
    }

    return grade;
}

let cgpa = (bn, en, mh, s) => {

    let total_gpa = (bn + en + mh + s);
    let cgpa = total_gpa/4;

    if ( bn == 0 || en == 0 || mh == 0 || s ==  0){
        return ` You are failed `;
    }else{
        return ` Your cgpa ${cgpa} `;
    }
}

    let result = '';
    let Marks = 0;

    if (gpa(Marks.bn) == 0 || gpa(Marks.en) == 0 || gpa(Marks.mh) == 0 || gpa(Marks.s) == 0) {

        result  = "Fail";

    }else{
        result = "Pass";
    }


   console.log(` 
    
        Name : ${Name},
        Age : ${Age},
        Roll : ${Roll},
        Class_Number : ${Class_Number},
        ======================================>
        Subject     Marks       Gpa      Grade

        Bangla       ${Mark.bn}          ${gpa(Mark.bn)}         ${grade(Mark.bn)}
        English      ${Mark.en}          ${gpa(Mark.en)}         ${grade(Mark.en)}
        Mathe        ${Mark.mh}          ${gpa(Mark.mh)}         ${grade(Mark.mh)}
        Science      ${Mark.s}          ${gpa(Mark.s)}         ${grade(Mark.s)}

        =======================================>
          Cgpa =  ${cgpa(gpa( Mark.bn ),gpa( Mark.en ),gpa( Mark.mh ),gpa( Mark.s ))}
          Result = ${result}
    
    `);


 
}




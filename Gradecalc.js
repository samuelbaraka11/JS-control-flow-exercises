const marks = [60, 54, 70, 54, 70, 80];

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    let sum = 0;
    //IMO, the for..of loop will best apply in this case.

    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average >= 90 && average <= 100)
        console.log("You scored an A");

    else if (average >= 80 && average <= 89)
        console.log("You scored a B");

    else if (average >= 70 && average <= 79)
        console.log("You scored a C");

    else if (average >= 60 && average <= 69)
        console.log("You scored a D");

    else
        console.log("You scored an F");

}


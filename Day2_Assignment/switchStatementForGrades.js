// Write a JavaScript function that evaluates a student's score 
// and returns their grade using a switch statement to assess score ranges.

function gradesBasedOnScores(mark) {

    switch (true) {
        case (mark >= 90):
        console.log("The grade is A+");   
        break;
        
        case(mark >= 80 && mark <= 90):
        console.log("The grade is A");
        break;

        case(mark >= 70 && mark <= 80):
        console.log("The grade is B");
        break;

        case(mark >= 60 && mark <= 70):
        console.log("The grade is C");
        break;

        case(mark >= 50 && mark <= 60):
        console.log("The grade is D");
        break;

        case(mark <= 50):
        console.log("The grade is F");
        break;

        default:
            break;
    }
    
}
gradesBasedOnScores(85);
gradesBasedOnScores(43);
gradesBasedOnScores(91);
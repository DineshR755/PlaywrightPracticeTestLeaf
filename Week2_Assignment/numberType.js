// Create a JavaScript function that determines if a number is positive, negative, or zero
//  and returns a corresponding string indicating the type.

function numberType(number){
if(number > 0){
    console.log(number + " - the number is positive");
}
else if(number == 0){
    console.log(number + " - the number is zero")
}
else{
console.log(number + " - the number is negative");
}
    }
numberType(8);
numberType(-8);
numberType(0);
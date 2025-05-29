// Write a JavaScript function named `isOddOrEven` that takes an integer as input 
// and returns `Odd` if the number is odd and `"Even"` if the number is even.\

function toCheckOddOrEven(number){
    if(number%2 == 0){
        console.log("the given number " + number +" is even");
    }
    else{
        console.log("given number " + number +" is odd");        
    }
}

toCheckOddOrEven(5);
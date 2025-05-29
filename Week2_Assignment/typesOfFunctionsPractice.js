// Task 1: Function Declaration
function userProfile(name){
    console.log("The user profile name is" + name);   
}

// Task 2: Arrow Function
let double = (num) => { 
    return num*num; };
console.log(double(5));

// Task 3: Anonymous Function
function timeOutMessage(){
    console.log("the message will be displayed after a delay of 2 seconds");  
}
let timeoutForTwoSecs = function() {
    setTimeout(timeOutMessage, 2000);
}

timeoutForTwoSecs();

//Task 4: Callback Function
function getUserdata(callback){
    setTimeout(() => {
    console.log("wait for 3 secs");
    callback()
    }, 3000);
}

function userdata(){
    let name = "dinesh";
    let age = 29;
    console.log("username:" + name);
    console.log("age :" + age);
}

getUserdata(userdata);

// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, 
// and `runTests` with `switch` for test type messages.


function launchBrowser(browserName){
if(browserName == "chrome"){
    console.log("chrome browser is launched");  
}
else if(browserName == "edge"){
    console.log("edge browser is launched");   
}
else{
    console.log("firefox browser is launched");   
}
}

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("for smoke test");
            break;
        
        case "shakeout":
            console.log("for shakeout test")
            break;

        case "regression":
            console.log("for regression test")
            break;
        
        case "sanity":
            console.log("for sanity test")
            break;
        default:
            console.log("for smoke test");
            break;
    }

}

launchBrowser("chrome");
runTests("regression");
launchBrowser("firefox");
runTests();

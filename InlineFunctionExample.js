function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(3));
}

// Call the emotions() function with two arguments
emotions("happy",function(num) {
    let laughtrack = "";
    for(var i = 1; i <= num; i++){
        laughtrack += "ha";
    }
    laughtrack += "!";
    return laughtrack;
});
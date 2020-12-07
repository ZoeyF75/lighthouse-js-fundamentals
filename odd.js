let num = Math.floor((Math.random())*50) //generates random number between 1 and 50
console.log(num);


function isOdd(input){
  input % 2 === 0 ? console.log("number is even") : console.log("number is odd"); //prints out whether the number is even or odd
  if (input % 2 !== 0){
    return true; //returns true if input is odd
  }
  else{
    return false; //returns false if input is even
  }
}

console.log(isOdd(num));
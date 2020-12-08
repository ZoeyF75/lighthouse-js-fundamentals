let input = Math.floor((Math.random())*1000); //generates random age between 0 and 
console.log(input);
function howManyHundreds(input){
  let remainder = input % 100;
  let result = (input - remainder) / 100;
  return result;
}

console.log(howManyHundreds(input));
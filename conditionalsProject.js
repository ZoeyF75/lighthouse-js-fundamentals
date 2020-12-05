/*Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases */

let age = Math.floor((Math.random())*50); //generates random age between 0 and 50
console.log(age);

const whichSchool  = function (age) {
  let education = (age <= 18 ? (age < 13? "Elementary School" : "Second School") : "Lighthouse Labs");
  return education;
}
whichSchool(age);
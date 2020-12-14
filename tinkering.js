/*
console.log(true || false);
console.log(false && false);
console.log(!true);
console.log(13> -7 || (false == 0));
console.log((10==="10")&& (1<=2));
console.log((3 != 6 % 3) && !(24>45)&&(!false));
*/

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return b - a;
});

console.log(numArray);
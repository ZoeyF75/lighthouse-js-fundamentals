/*We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.*/

/*range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples*/

for(let n = 100; n <= 200; n++){
  n % 3 === 0? (n % 4 === 0? console.log("LoopyLighthouse") : console.log("Loopy")) : (n % 4 === 0? console.log("Lighthouse") : console.log(n));
}

function loopyLighthouse(range, multiples, words){
  for(let i = range[0]; i <= range[1]; i++){
    i % multiples[0] === 0? (i % multiples[1] === 0 ? console.log(words[0] + words [1]) : console.log(words[0])) : i % multiples[1] === 0? console.log(words[1]) : console.log(i);
  }
}

console.log(loopyLighthouse([1,100],[2,5],["banana","pineapple"]));
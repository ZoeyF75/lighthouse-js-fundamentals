function range(start,end,step){
  let finalArray = [];
  if( start === undefined|| end === undefined|| step === undefined || start > end || step <= 0 ){
    finalArray = [];
  } else {
    for(let i = start; i <= end; i += step){
      finalArray.push(i);
    }
  }
  return finalArray;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

/*The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative*/


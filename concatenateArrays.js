function concat(arr1, arr2){
  let concatArray = arr1.concat(arr2);
  return concatArray;
}
  


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

/*
let lastIndexOf = function(array, value){
  for(let i = array.length-1; i >= 0; i--){
    if(array[i] === value){
      return i;
   }   
  }
  return -1;
  concatArray.push(arr1);
  concatArray.push(arr2);
} */


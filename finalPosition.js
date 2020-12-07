const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
  let coordinates = [0,0];
  console.log(moves);
  for(let move of moves){
    if (move === 'north'){
      coordinates[1] += 1;
    } else if (move === 'west'){
      coordinates[0] -= 1;
    } else if (move === 'east'){
      coordinates[0] += 1;
    } else{
      coordinates[1] -= 1;
    }
  }
  return coordinates;
}

console.log(finalPosition(moves));
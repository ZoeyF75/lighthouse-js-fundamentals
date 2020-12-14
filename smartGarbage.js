/*let smartGarbage = function(trash,bins){
  trash === "waste" ? bins[trash] += 1 : (trash === "recycling" ? bins[trash] += 1 : bins[trash] += 1);
  return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));

const carPassing = function (cars, speed) {
  return speed[cars];
} */

/*const carPassing = function (cars, speed) {
  let carsMonitered = {
    time: Date.now(),
    speed: speed,
  };
  cars.push(carsMonitered);
  return cars;
}


const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));
console.log(cars);*/



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 20
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 3,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 20
  }
]

//console.log(vegetables[1]);

const metric = 'plumpness'

let judgeVegetable = function(vegetables,metric){ //met redness veg-entire array veg.met
  let metArray  = [];
  let highestRanking;
  for(let veggie of vegetables){
    //console.log(veggie[metric]);
   metArray.push((veggie[metric]));
  }
  metArray.sort(function(a, b) {
    return b - a;
  });
  highestRanking = metArray[0];
  for(let veggie2 of vegetables){
    if (veggie2[metric] === highestRanking){
      return veggie2.submitter;
    }
  }
}

console.log(judgeVegetable(vegetables, metric));
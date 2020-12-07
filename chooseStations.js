//Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  for(const array of stations){
    if (array[1] >=20 && (array[2] === 'community centre' || array[2] === 'school')){
      goodStations.push(array[0]);
    } 
    else{
      console.log(array[0] + " is not adequate");
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
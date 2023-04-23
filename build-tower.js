//Build Tower
//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
//A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    let spaces = ' '.repeat(nFloors - i - 1);
    let asterisks = '*'.repeat((i * 2) + 1);
    tower.push(spaces + asterisks + spaces);
  }
  return tower;
}

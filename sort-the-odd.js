//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//Examples
//[7, 1]  =>  [1, 7]
//[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//replacing elements in array, if element is odd, with sorted array of odd elements.

function sortArray(array) {
  let odds = array.filter(e => e % 2 !== 0).sort((a, b) => a - b)
  let oddsCounter = 0
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 !== 0) {
      array.splice(i, 1, odds[oddsCounter])
      oddsCounter++
    }
  }
  return array
}



//refactored code

function sortArray(array) {
  let odds = array.filter(e => e % 2 !== 0).sort((a, b) => a - b)
  return array.map((x) => x % 2 ? odds.shift() : x);
}

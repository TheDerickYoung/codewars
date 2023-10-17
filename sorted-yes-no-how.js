//Complete the method which accepts an array of integers, and returns one of the following:

//"yes, ascending" - if the numbers in the array are sorted in an ascending order
//"yes, descending" - if the numbers in the array are sorted in a descending order
//"no" - otherwise
//You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  //check if the order of the array is ascending
  const ascending = array.every((element, index) => index === 0 || element >= array[index - 1]);
  //check if the order of an array is descending 
  const descending = array.every((element, index) => index === 0 || element <= array[index - 1]);
  //if neither return no
  if (ascending) {
    return "yes, ascending"
  } else if (descending) {
    return "yes, descending"
  } else {
    return "no"
  }
}

//refactored code

function isSortedAndHow(array) {
  //check if the order of the array is ascending
  const ascending = array.every((element, index) => index === 0 || element >= array[index - 1]);
  //check if the order of an array is descending 
  const descending = array.every((element, index) => index === 0 || element <= array[index - 1]);
  //if neither return no
  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}

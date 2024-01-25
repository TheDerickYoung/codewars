//Find the number with the most digits.

//this solution considers all edge cases 
function findLongest(array){
  if (array.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let maxDigits = 0;
  let numberWithMostDigits = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentDigits = Math.abs(array[i]).toString().length;

    if (currentDigits > maxDigits) {
      maxDigits = currentDigits;
      numberWithMostDigits = array[i];
    }
  }

  return numberWithMostDigits;
}

//Another solution
function findLongest(array){
  let highest = 0
  for (let num of array) {
    if (num > highest) {
      highest = num
    }
  }
  return highest
}



//easiest solution
function findLongest(array){
  return array.sort()[array.length - 1]
}

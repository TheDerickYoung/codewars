//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.

//The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  // Compare the first three numbers
  const [num1, num2, num3] = arr;
  
  if (num1 === num2) {
    // Unique number is different from the first two numbers
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== num1) {
        return arr[i];
      }
    }
  } else if (num1 === num3) {
    // Unique number is different from the first and third numbers
    return num2;
  } else {
    // Unique number is different from the first and second numbers
    return num1;
  }
}

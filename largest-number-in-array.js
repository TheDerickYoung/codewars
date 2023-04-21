//Write a function that takes an array of numbers and returns the largest number in that array.

function greatest(arr) {
  return arr.sort((a, b) => a > b ? -1 : 1).[0]
}

//Use .filter() and .map() to create a new array that contains only the even numbers from the input array, and then square each even number in the resulting array.

let evenSquares = function(arr) {
  let evens = arr.filter(element => element % 2 === 0)
  return evens.map(element => Math.pow(element, 2))
}

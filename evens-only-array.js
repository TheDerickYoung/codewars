//Use .filter() to create a new array that includes only the even numbers from the input array.

let evenUp = function(arr) {
  return arr.filter(element => element % 2 === 0 ? true : false)
}

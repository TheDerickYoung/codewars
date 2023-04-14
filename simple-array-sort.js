//Use .sort() to sort the elements of the input array in descending order.

let sortArr = function(arr) {
  return arr.sort((a, b) => a > b ? 1 : -1)
}

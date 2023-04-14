//Use .map() and .reduce() to calculate the average of the squared elements in the input array.

let avgUp = function(arr) {
  let squaredArr = arr.map(element => Math.pow(element, 2))
  return squaredArr.reduce((acc, curr) => acc + curr, 0) / arr.length
}

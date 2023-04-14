//Use .reduce() to calculate the sum of the elements in the input array.

let addUp = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

//Use .filter() to create a new array that includes only the strings from the input array that are at least 5 characters long.

let checkLength = function(arr) {
  return arr.filter(element => element.length > 5)
}

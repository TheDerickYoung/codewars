//Write a function that takes a string and returns the first letter of each word in that string as a new string.

function firstLetter(str) {
  return str.split(' ').map(e => e[0]).join('')
}

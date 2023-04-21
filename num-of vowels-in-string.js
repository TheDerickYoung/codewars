//Write a function that takes a string and returns the number of vowels in that string.

function vowels(str) {
  return str.split('').filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === 'y').length
}

//Write a function that takes a string and returns the string with all the vowels removed.

function removeVowels(str) {
  return str.split('').filter(e => e !== 'a' && e !== 'e' && e !== 'i' && e !== 'o' && e !== 'u' && e !== 'y').join('')
}

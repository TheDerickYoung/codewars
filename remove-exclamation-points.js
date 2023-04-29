//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamations = str => {return str.split('').filter(e => e !== '!').join('')}

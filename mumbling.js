//This time no story, no theory. The examples below show you how to write function accum:

//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let newStr = []
  let split = s.split('')
  split.forEach((e, i) => {
    newStr.push(e.toUpperCase())
    for (let j = 0; j <= i - 1; j++) {
      newStr.push(e.toLowerCase())
    }
    newStr.push('-')
  })
  newStr.pop()
  return newStr.join('')
}

//Complete the solution so that the function will break up camel casing, using a space between words.

//Example
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

function solution(string) {
  const result = [];
  string.split('').map((char, index) => {
  if (char === char.toUpperCase()) {
    result.push(' ');
  }
  result.push(char);
  })
  return result.join('')
}

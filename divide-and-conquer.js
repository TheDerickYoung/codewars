/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
  let nums = x.filter((num) => typeof num === 'number').reduce((a,b) => a + b, 0)
  let strs = x.filter((str) => typeof str === 'string').map(str => Number(str)).reduce((a,b) => a + b, 0)
  return nums - strs
}

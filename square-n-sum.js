Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  return numbers.map(number => Math.pow(number, 2)).reduce((a,c) => a + c, 0)
}

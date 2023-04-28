//In elementary arithmetic a "carry" is a digit that is transferred from one column of digits to another column of more significant digits during a calculation algorithm.

//This Kata is about determining the number of carries performed during the addition of multi-digit numbers.

//You will receive an input string containing a set of pairs of numbers formatted as follows:

//123 456
//555 555
//123 594
//And your output should be a string formatted as follows:

//No carry operation
//3 carry operations
//1 carry operations
//Some Assumptions
//Assume that numbers can be of any length.
//But both numbers in the pair will be of the same length.
//Although not all the numbers in the set need to be of the same length.
//If a number is shorter, it will be zero-padded.
//The input may contain any arbitrary number of pairs.

function solve(inputString){
  let lines = inputString.split('\n');
  let results = [];

  for(let line of lines){
    let count = 0;
    let carry = 0;
    let pairs = line.split(' ').map(str => str.split('').reverse().join(''));

    for(let i = 0; i < pairs[0].length; i++){
      let sum = Number(pairs[0][i]) + Number(pairs[1][i]) + carry;
      if(sum >= 10){
        count++;
        carry = 1;
      } else {
        carry = 0;
      }
    }

    results.push(count === 0 ? "No carry operation" : `${count} carry operations`);
  }

  return results.join('\n');
}

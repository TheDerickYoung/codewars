//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

//Examples:

//input:    output:
//0    ->   0
//2    ->   5
//3    ->   5
//12   ->   15
//21   ->   25
//30   ->   30
//-2   ->   0
//-5   ->   -5
//etc.

function roundToNext5(n){
  const remainder = n % 5;
  if (remainder === 0) {
    return n; 
  } else {
    if (n < 0) {
      return n - remainder; 
    } else {
      return n + (5 - remainder);
    }
  }
}

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//Example
//Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  let split = word.split('');
  let filtered = split
    .map((e, i) => (e === e.toUpperCase() ? i : false))
    .filter((index) => index !== false)
  return filtered;
};

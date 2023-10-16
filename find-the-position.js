//When provided with a letter, return its position in the alphabet.

//Input :: "a"

//Ouput :: "Position of alphabet: 1"

function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');
  const positions = alphabetArray.map((x, i) => x === letter ? i + 1 : null);
  const nonNullElement = positions.find(position => position !== null);
  return nonNullElement !== undefined && `Position of alphabet: ${nonNullElement}`;
}

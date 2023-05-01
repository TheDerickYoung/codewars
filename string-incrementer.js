//Your job is to write a function which increments a string, to create a new string.

//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
//Examples:

//foo -> foo1

//foobar23 -> foobar24

//foo0042 -> foo0043

//foo9 -> foo10

function incrementString (strng) {
  let checkForNum = /\d+$/;
  let match = strng.match(checkForNum);
  let string = strng.replace(/\d+$/, '');
  let numLength = match ? match[0].length : 0;
  let incrementedNum = match ? (Number(match[0]) + 1).toString().padStart(numLength, '0') : '1';
  return `${string}${incrementedNum}`;
}

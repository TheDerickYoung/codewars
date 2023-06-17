//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//Examples
//replace("Hi!") === "H!!"
//replace("!Hi! Hi!") === "!H!! H!!"
//replace("aeiou") === "!!!!!"
//replace("ABCDE") === "!BCD!"

function replace(s) {
  return s.split('').map(e => {
    if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u' || e === "A" || e === 'E' || e === 'I' || e === 'O' || e === 'U') {
      return '!';
    } else {
      return e;
    }
  }).join('');
}

//or

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, '!');
}

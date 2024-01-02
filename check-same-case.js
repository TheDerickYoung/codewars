//Write a function that will check if two given characters are the same case.

//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0

function sameCase(a, b) {
  function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }

  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }

  return isUpperCase(a) === isUpperCase(b) || isLowerCase(a) === isLowerCase(b) ? 1 : 0;
}

function isUpperCase(char) {
  return /^[A-Z]$/.test(char);
}

function isLowerCase(char) {
  return /^[a-z]$/.test(char);
}

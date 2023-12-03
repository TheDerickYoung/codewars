//Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
  const lowercaseMatches = str.match(/[a-z]/g);
  return lowercaseMatches ? lowercaseMatches.length : 0;
}

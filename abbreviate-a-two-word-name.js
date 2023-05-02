//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

function abbrevName(name){
  let split = name.split(' ')
  return split[0].split('')[0].toUpperCase() + '.' + split[1].split('')[0].toUpperCase()
}

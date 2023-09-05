//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

//The order of the sequence has to stay the same.

//Examples:

//Input -> Output
//[1, 1, 2] -> [1, 2]
//[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
  const collection = []
  collection.push(a[0])
  for (let i = 1; i < a.length; i++) {
    if (!collection.includes(a[i])) {
      collection.push(a[i])
    }
  }
  return collection;
}

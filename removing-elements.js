//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
  let newArr = [];
  newArr.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

/*Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  let updated = []

  text.split('').forEach(e => {
    if (updated.some(obj => obj.name === e)) {
      let index = updated.findIndex(obj => obj.name === e)
      updated[index].count += 1;
    } else {
      updated.push({
        name: e,
        count: 1
      })
    }
  })

  return updated.map(e => [e.name, e.count])
}

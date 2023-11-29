//For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

//Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

function cookie(x){
  return typeof x === 'string' ? `Who ate the last cookie? It was Zach!` : typeof x === 'number' ? `Who ate the last cookie? It was Monica!` : `Who ate the last cookie? It was the dog!` 
}

//the following is code I would more likely use in a codebase due to easier readability -- the above is just because it's fun to solve a challenge in one line of code and I really love ternary operators. :)

function cookie(x) {
  if (typeof x === 'string') {
    return `Who ate the last cookie? It was Zach!`
  } else if (typeof x === 'number') {
    return `Who ate the last cookie? It was Monica!`
  } else {
    return `Who ate the last cookie? It was the dog!`
  }
}

//Make a simple function called greet that returns the most-famous "hello world!".

//Style Points
//Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
  
function greet() {
  let result = "";

  const characters = [
    ['H', 'e', 'l', 'l', 'o'],
    [' ', 'W', 'o', 'r', 'l', 'd', '!']
  ];

  for (let i = 0; i < characters.length; i++) {
    const row = characters[i];
    for (let j = 0; j < row.length; j++) {
      const character = row[j];
      result += character;
    }
  }
  return result.toLowerCase();
}

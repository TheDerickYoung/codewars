Complete the function which returns the weekday according to the input number:

//1 returns "Sunday"
//2 returns "Monday"
//3 returns "Tuesday"
//4 returns "Wednesday"
//5 returns "Thursday"
//6 returns "Friday"
//7 returns "Saturday"
//Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
  let days = [
    {
      dayNum: 1,
      day: "Sunday"
    },
    {
      dayNum: 2,
      day: "Monday"
    },
    {
      dayNum: 3,
      day: "Tuesday"
    },
    {
      dayNum: 4,
      day: "Wednesday"
    },
    {
      dayNum: 5,
      day: "Thursday"
    },
    {
      dayNum: 6,
      day: "Friday"
    },
    {
      dayNum: 7,
      day: "Saturday"
    },
  ]
  
  let answer = days.find(x => x.dayNum === num);
  
  if (answer) {
    return answer.day;
  } else {
    return "Wrong, please enter a number between 1 and 7"; 
  }
}

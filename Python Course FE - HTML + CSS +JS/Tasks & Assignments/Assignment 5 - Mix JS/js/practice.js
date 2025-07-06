// //Get Week Day (switch) - Understandable but i need a smarter way to do it
// const dayNum = +prompt("Enter a number (1–7):");

// switch (dayNum) {
//   case 1: alert("Sunday"); break;
//   case 2: alert("Monday"); break;
//   case 3: alert("Tuesday"); break;
//   case 4: alert("Wednesday"); break;
//   case 5: alert("Thursday"); break;
//   case 6: alert("Friday"); break;
//   case 7: alert("Saturday"); break;
//   default: alert("Invalid day");
// }

//simple calctr
const a  = +prompt("Enter first number:");
const op = prompt("Enter operator (+, -, *, /):");
const b  = +prompt("Enter second number:");

let result;

switch (op) {
  case "+": result = a + b; break;
  case "-": result = a - b; break;
  case "*": result = a * b; break;
  case "/": result = b !== 0 ? a / b : "Error: divide b zero"; break;
  default : result = "Invalid operator";
}

alert(result);

// //even numbers 1 to 100
// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

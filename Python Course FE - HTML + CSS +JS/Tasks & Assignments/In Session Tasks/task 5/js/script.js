let userName = prompt("What's your name?");

if (!userName) {
  console.log("You didn't enter your name!");
} else {
  console.log("Hello, " + userName + "!");
}
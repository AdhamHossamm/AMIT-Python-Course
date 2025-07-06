let num = Number(prompt("Enter a number:"));
console.log(
  `Your number ${num} is ${
    num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
  }`
);
if (num > 0) {
  console.log(`It is ${num % 2 === 0 ? "Even" : "Odd"}`);
}

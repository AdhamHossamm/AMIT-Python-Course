let firstInput = prompt("Enter the first number:");
let secondInput = prompt("Enter the second number:");

// convert to integers with prse bas da test
let num1 = parseInt(firstInput);
let num2 = parseInt(secondInput);

console.log("First number:", num1, "| Type:", typeof num1);
console.log("Second number:", num2, "| Type:", typeof num2);

if (num1 === num2) {
  console.log("The two numbers are equal.");
} else {
  console.log("The two numbers are NOT equal.");
}

let difference = Math.abs(num1 - num2);
let base = Math.min(num1, num2);
let percentDiff = (difference / base) * 100;

console.log("Difference in %:", percentDiff + "%");

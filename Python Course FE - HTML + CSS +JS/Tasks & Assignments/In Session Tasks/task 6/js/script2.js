let firstInput = prompt("Enter the first number:");
let secondInput = prompt("Enter the second number:");

// Show originals input values
console.log("First input (raw):", firstInput, "| Type:", typeof firstInput);
console.log("Second input (raw):", secondInput, "| Type:", typeof secondInput);

let num1 = parseInt(firstInput);
let num2 = parseInt(secondInput);

console.log("First number (converted):", num1, "| Type:", typeof num1);
console.log("Second number (converted):", num2, "| Type:", typeof num2);

if (num1 === num2) {
  console.log("The two numbers are equal.");
} else {
  console.log("The two numbers are NOT equal.");
}
if (num1 > num2) {
  console.log(num1 + " is greater tham " + num2);
} else if (num2 > num1) {
  console.log(num2 + " is greater than " + num1);
}
if (num1 % 2 === 0) {
  console.log(num1 + " is even");
} else {
  console.log(num1 + " is odd");
}

if (num2 % 2 === 0) {
  console.log(num2 + " is even");
} else {
  console.log(num2 + " is odd");
}let difference = Math.abs(num1 - num2);
let base = Math.min(num1, num2);
let percentDiff = (difference / base) * 100;

console.log("Difference:", difference);
console.log("Difference in %:", percentDiff + "%");

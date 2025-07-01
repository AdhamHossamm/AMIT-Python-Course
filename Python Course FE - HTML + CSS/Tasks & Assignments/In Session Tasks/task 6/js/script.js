let userName = prompt("Step 1) Enter your Name (Example: Adham):");
let birthYear = prompt("Step 2) Enter your Year of Birth (Example: 2000):");

console.log("userName:", userName);
console.log("Year of Birth:", birthYear);
console.log("Type of userName:", typeof userName);
console.log("Type of birthYear (before conversion):", typeof birthYear);

let birthYearNumber = Number(birthYear);
let currentAge = 2025 - birthYearNumber;

console.log("Type of birthYear (after conversion):", typeof birthYearNumber);
console.log("Calculated Age in 2025:", currentAge);

if (currentAge >= 18) {
  console.log("You are eligible to vote.");
} else {

}
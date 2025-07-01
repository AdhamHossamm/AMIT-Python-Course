let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

console.log("Name:", name);
console.log("Age:", age);

// Show types
console.log("Type of name:", typeof name);
console.log("Type of age (before conversion):", typeof age);

// Convert age to number (da test men stackoverflow)
let ageNumber = Number(age);
console.log("Type of age (after conversion):", typeof ageNumber);

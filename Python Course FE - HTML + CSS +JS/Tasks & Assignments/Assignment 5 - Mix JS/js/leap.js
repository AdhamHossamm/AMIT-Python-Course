const year = +prompt("Enter a year:");

alert(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap year يا هندسه" : "Not a leap year يا هندسه");
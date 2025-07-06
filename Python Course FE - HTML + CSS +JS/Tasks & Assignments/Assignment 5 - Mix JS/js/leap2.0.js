while (true) {
  const input = prompt("Enter a year (Cancel to quit):");
  if (input === null) break;

  const year = Number(input);
  if (!Number.isInteger(year) || year <= 0) {
    alert("Invalid year. Try again.");
    continue;
  }

  alert(
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? "Leap year يا هندسه"
      : "Not a leap year يا هندسه"
  );

  if (!confirm("Check another year?")) break;
}

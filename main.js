var name = prompt("Name?");
var age = prompt("Age?");
var exp = prompt("Years of experience?");
var rating = prompt("Self rating (1-10)?");
var baseSalary = prompt("Base Salary?");

exp = Number(exp);
rating = Number(rating);
baseSalary = Number(baseSalary);

var job;
if (exp < 2) {
  job = "Junior";
} else if (exp >= 2 && exp <= 5) {
  job = "Mid-Level";
} else if (exp > 5 && exp <= 10) {
  job = "Senior";
} else {
  job = "Expert";
}

var performance;
switch (true) {
  case rating >= 9:
    performance = "Excellent";
    break;
  case rating >= 7 && rating <= 8:
    performance = "Good";
    break;
  case rating >= 5 && rating <= 6:
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}

var bonusPercent;
if (exp < 2) {
  bonusPercent = 0.1;
} else if (exp >= 3 && exp <= 5) {
  bonusPercent = 0.15;
} else if (exp > 5) {
  bonusPercent = 0.2;
}

var bonus = baseSalary * bonusPercent;
var finalSalary = baseSalary + bonus;

var hour = new Date().getHours();
var shift;
if (hour >= 9 && hour < 18) {
  shift = "Day Shift";
} else {
  shift = "Night Shift";
}

var msg =
  "Name: " +
  name +
  "\nAge: " +
  age +
  "\nExperience: " +
  exp +
  "\nJob Category: " +
  job +
  "\nPerformance: " +
  performance +
  "\nBase Salary: " +
  baseSalary +
  "\nBonus: " +
  bonus +
  "\nFinal Salary: " +
  finalSalary +
  "\nShift: " +
  shift;

console.log(msg);
alert(msg);
document.getElementById("result").innerText = msg;

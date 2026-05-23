// <------------ Relationship B/w Integer and string --------------------->

let a = 10;
let b = 20;

console.log("The sum of " + a + " and " + b + " is " + a + b);
// "The sum of 10" + " and " + b + " is " + a + b
// The sum of 10 and 20 is 1020

console.log("The sum of " + a + " and " + b + " is " + (a + b));
// The sum of 10 and 20 is 30

console.log(`The sum of ${a} and ${b} is ${a + b}`);
// The sum of 10 and 20 is 30

// <-------------------- Accept value from terminal ----------------->

// Install Library :-  npm install prompt-sync

let prompt = require("prompt-sync")();
let age = prompt("Enter Your age ");

console.log(`Your age is: ${age}`);

// <-------------------- Swap Two Variables  ----------------->

///////  1st Method : - swap two variable with extra variable

let x = 10;
let y = 20;

let temp = x;
x = y;
y = temp;
console.log(`X Value is : ${x}, Y Value is : ${y}`);

///////  2nd Method : -  Via Mathematics

let m = 10;
let n = 20;

m = m + n; // 30
n = m - n; // 30 - 20 -> 10
m = m - n; // 30 - 10 -> 20
console.log(`M Value is : ${m}, N Value is : ${n}`);

///////  3rd Method : - Swaping

let p = 10;
let q = 20;

[p, q] = [q, p];
console.log(`P Value is : ${p}, Q Value is : ${q}`);

//// Ques 1 : - Write a program that prints the sum of two numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(-10, 10));

//// Ques 2 : -  Write a program that accepts a username and age as input and then print a greeting message
function greet(name, age) {
  console.log(`Hello ${name}, You are ${age} years old.`);
}
greet("Shery", 12);
greet("Alice", 1);

//// Ques 3 : -  Write a Program that accepts two integer as input and swaps thier value and print value of two numbers
function swapNumbers(a, b) {
  [a, b] = [b, a];
  console.log(`A Value: ${a}, B Value: ${b}`);
}
swapNumbers(5, 10);

///// Ques 4 : - Calculate the compound interest till two decimal

/// P -> Principal amount, r -> annual interest rate, t -> number of years, n -> number of times interest is compound per year
/// A -> amount of money accumulated after n years, including interest
    //// A = A = P*(1 + r/n) **( n*t);
    //// CI = A - P;

function calculateCompoundInterest(P, r, t, n){
  let A = P * (1 + r/n) ** (n*t);
  let CI = (A - P).toFixed(2);
  return CI;
}
console.log(calculateCompoundInterest(1000, 0.5, 10, 4));

const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2022.");
console.log("Please, remind me your name.");

// use input() + to get the user's output
let yourName = input();

console.log("What a great name you have, " + yourName + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

// reading all remainders
let remainder3 = input();
let remainder5 = input();
let remainder7 = input();

let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105

console.log("Your age is " + yourAge + "; that's a good time to start programming!");

console.log("Now I will prove to you that I can count to any number you want.");

// read a number and count to it here
let countTo = input();

function counting(num) {
  let n = 0;
  while (n <= num) {
    n++;
    console.log(String(n) + " !");
  }
}

counting(countTo);

console.log("Completed, have a nice day!");
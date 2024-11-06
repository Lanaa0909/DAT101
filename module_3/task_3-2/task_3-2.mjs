"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
printOut(newLine);
//Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other should count from 10 to 1. Use only two lines to print the rows.

let countUp = '';//ikke bruk const her
for (let i = 1; i <= 10; i++) {
  countUp += i + ' ';
}


let countDown = '';
for (let i = 10; i >= 1; i--) {
  countDown += i + ' ';
}


printOut(countUp + '<br>');
printOut(countDown + '<br>');

printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut(newLine);
//Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the "random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the number once the "while" loop has completed. You do not need to print anything while the "while" loop is in progress.

let target = 45;
let guess = 0;    
let attempts = 0; 

while (guess !== target) {
  guess = Math.floor(Math.random() * 60) + 1;
  attempts++;
}

printOut(`Correct guess: ${guess} in ${attempts} attempts<br>`);

printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
printOut(newLine);
//Take the program from part 2 and expand it to guess a number between 1 and one million. Print the number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the Date.now() function to measure time

let target1 = Math.floor(Math.random() * 1000000) + 1;
let guess1 = 0;
let attempts1 = 0;

let startTime = Date.now();

while (guess1 !== target1) {
  guess1 = Math.floor(Math.random() * 1000000) + 1;
  attempts1++;
}

let endTime = Date.now();
let timeTaken = endTime - startTime;

printOut(`Correct guess: ${guess1} in ${attempts1} attempts<br>`);
printOut(`Time taken: ${timeTaken} milliseconds<br>`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
printOut(newLine);
//Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200. ○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and 1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI)

let primes = [];
for (let num = 2; num < 200; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}

printOut(`Prime numbers between 1 and 200: ${primes.join(', ')}<br>`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
printOut(newLine);
// Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the second cell, and so on. Use the provided printOut function to print each row with its sets of columns; remember to place this in the right level of the nested for loops.
// Hint: Use what we call nested loops. This is a "for" loop within another "for" loop

function printRow(row) {
  printOut(row + '<br>');
}

for (let row = 1; row <= 7; row++) {
  let output = '';
  for (let col = 1; col <= 9; col++) {
    output += `K${col}R${row} `;
  }
  
  printRow(output.trim());
}
printOut(newLine);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut(newLine);
/* Put your code below here!*/
//se på PDF filen for oppgaven

function getGrade(score) {
    let percentage = (score / 236) * 100;
    if (percentage >= 89) return 'A';
    else if (percentage >= 77) return 'B';
    else if (percentage >= 65) return 'C';
    else if (percentage >= 53) return 'D';
    else if (percentage >= 41) return 'E';
    else return 'F';
  }
  
  let grades = []; 
  
  // Generate 5 random grades
  for (let i = 0; i < 5; i++) {
    let score = Math.floor(Math.random() * 236) + 1;
    let grade = getGrade(score);
    grades.push({ score, grade });
  }
  
  
  grades.forEach(({ score, grade }, index) => {
    printOut(`Student ${index + 1}: Score = ${score}, Grade = ${grade}<br>`);
  });
  
  
  grades.sort((a, b) => b.score - a.score);
  
  printOut('<br><strong>Sorted Grades:</strong><br>');
  grades.forEach(({ score, grade }, index) => {
    printOut(`Student ${index + 1}: Score = ${score}, Grade = ${grade}<br>`);
  });
  
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut(newLine);
/* Put your code below here!*/
// Part 7 Dice Rolling Extravaganza (20 points) Simulate 6 dice and print how many "throws" it takes to get:
// ● 1 2 3 4 5 6 (full straight 
// ● 3 pairs 
// ● 2 of a kind 
// ● 4 of a kind (tower) 
// ● All the same (Yahtzee)

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Vi skal ha Full straight (1-6)
  let straightRolls = 0;
  let straightSet = new Set();
  while (straightSet.size < 6) {
    straightSet.add(rollDice());
    straightRolls++;
  }
  printOut
  (`Full Straight achieved in ${straightRolls} rolls<br>`);
  
  // Her er det 3 pairs
  let pairRolls = 0;
  let pairCounts;
  do {
    pairCounts = Array(6).fill(0);
    for (let i = 0; i < 6; i++) {
      pairCounts[rollDice() - 1]++;
    }
    pairRolls++;
  } while (pairCounts.filter(count => count === 2).length < 3);
  printOut
  (`3 Pairs achieved in ${pairRolls} rolls<br>`);
  
  // 2 of a kind og 4 of a kind (tower)
  let towerRolls = 0;
  let towerCounts;
  do {
    towerCounts = Array(6).fill(0);
    for (let i = 0; i < 6; i++) {
      towerCounts[rollDice() - 1]++;
    }
    towerRolls++;
  } while (!(towerCounts.includes(2) && towerCounts.includes(4)));
  printOut
  (`Tower achieved in ${towerRolls} rolls<br>`);
  
  let yahtzeeRolls = 0;
  let yahtzeeSet;
  do {
    yahtzeeSet = new Set();
    for (let i = 0; i < 6; i++) {
      yahtzeeSet.add(rollDice());
    }
    yahtzeeRolls++;
  } while (yahtzeeSet.size > 1);
  printOut
  (` Wohoo! Yahtzee has been achieved in ${yahtzeeRolls} rolls<br>`);
  
printOut(newLine);


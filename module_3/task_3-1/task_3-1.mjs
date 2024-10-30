"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");


//Part 1:
// Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time (6, 7, 8). Print out to the HTML page the expression statement you made.

//Part 2:
//Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to school, otherwise I have to take the car to school". Run the program with different values of wake-up time (6, 7, 8)

//Part 3:
//Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school, otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to school”. Run the program with a different value of wake-up time (7, 8).

let wakeUpTime = 8;
if (wakeUpTime === 7) {
  printOut("I can take the buss to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(" Wake up time = 8");
// en kommentar
const o = 0;
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

//Part 4:
//Write an if statement that checks whether an integer variable is negative or positive, print the text "Positive" or "Negative" accordingly. Run the program with different types of values for the variable to check the if statement

//Part 5:
//Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of values for the variable to check the "if" statement

let number = -1; 

if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero");
}

printOut("Oppgave 4 value = -1 ");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

//Part 6:
//Imagine you have a photo editing profession. And you have a website where people can upload pictures for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them. Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to simulate the uploaded image size and print it. Then create an if statement that prints o“Thank you” if the
//size is equal to or greater than the limit. Otherwise, print out "The image is too small".


let imageSize = Math.floor(Math.random() * 8) + 1;

// Print the generated image size
printOut("Uploaded image size: " + imageSize + " MP");

// Set the minimum acceptable size limit
const minimumSize = 4;

// Check if the image size meets the requirement
if (imageSize >= minimumSize) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

//Part 7:
//Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.

let newImageSize = Math.floor(Math.random() * 6) + 4; // 4 to 9 (inclusive)

// Print the generated image size
printOut("Uploaded image size: " + newImageSize + " MP");

// Check the size and respond accordingly
if (newImageSize >= 6) {
    printOut("Image is too large");
} else if (newImageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

//Part 8:
//Use this code:
//const monthList =["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"]; const noOfMonth = monthList.length; const monthName = monthList[Math.floor(Math.random() * noOfMonth)];Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”

const monthList = [
  "January", "February", "Mars", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"
];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

// Print the month name for reference
printOut("Selected month: " + monthName);

// Check if monthName contains "r" and print the appropriate message
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

//Part 9:
//Expand exercise 8 to print how many days there are in the current month. And do not use date object.

// Month list and random month generation
const theMonthList = [
  "January", "February", "Mars", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"
];

// Days in each month
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Get the number of months
const theNoOfMonth = theMonthList.length;

// Select a random month
const theMonthName = theMonthList[Math.floor(Math.random() * theNoOfMonth)];

// Print the selected month name



// Determine the index of the selected month
const monthIndex = theMonthList.indexOf(theMonthName);

// Print the number of days in the selected month
if (monthIndex !== -1) { // Check if monthIndex is valid
  const days = daysInMonth[monthIndex];
  printOut("Number of days in " + theMonthName + ": " + days);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

//Part 10
//Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from March through May, but in April you have temporary premises in the building next door. Use the month constant in exercise 8 to inform the status of your gallery in that month.

// New month array and random month selection
const galleryMonths = [
  "January", "February", "Mars", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"
];

// Get the number of months
const totalMonths = galleryMonths.length;

// Select a random month
const selectedMonth = galleryMonths[Math.floor(Math.random() * totalMonths)];

// Determine the status of the art gallery
if (selectedMonth === "March" || selectedMonth === "April" || selectedMonth === "May") {
  if (selectedMonth === "April") {
      printOut("The gallery is temporarily located in the building next door.");
  } else {
      printOut("The gallery is closed for refurbishment.");
  }
} else {
  printOut("The gallery is open.");
}


printOut(newLine);

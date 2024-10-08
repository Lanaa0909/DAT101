"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// 2 + 3 * 2 - 4 * 6

const expression = 2 + 3 * (2 - 4) * 6;

printOut(expression.toString());

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters (maximum 2 decimal places in
the answer).*/

//Given Data
const meter = 25;
const centimeter = 34;

const totalMillimeter = meter * 1000 + centimeter * 10;
const inch = totalMillimeter / 25.4;

printOut("Inches = " + inch.toFixed(2));

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives.*/

//Given Data
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;
const DayHours = 24;

//Step 1: Convert days to minutes
const daysToHours = days * DayHours;
const daysToMinutes = daysToHours * 60;
printOut(" 3 Days in Minutes = " + daysToMinutes);

//Step 2: Convert hours to minutes
const hoursToMinutes = hours * 60;
printOut("12 Hours in Minutes = " + hoursToMinutes);

//Step 3: Convert minutes to minutes
printOut ("14 minutes = 14 Minutes");

//Step 4: Convert seconds to minutes (1 minute = 60 seconds)
const secondsToMinutes = seconds / 60;
printOut("45 Seconds in Minutes = " + secondsToMinutes);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds.
*/

const numberOfMinutes = 6322.52;
//Step 1: Calculate number of days
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_days = Math.floor(part4_Calc);
printOut("Days = " + part4_days);

//Step 2: Calculate number of hours
part4_Calc = part4_Calc - part4_days;
part4_Calc = part4_Calc * 24;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

//Step 3: Calculate number of minutes
part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * 60;
const part4_minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_minutes);

//Step 4: Calculate number of seconds
part4_Calc = part4_Calc - part4_minutes;  
const part4_Seconds = Math.floor(part4_Calc * 60); 
printOut("Seconds = " + part4_Seconds);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Convert 54 dollars to Norwegian kroner, and print the price for both:NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".
*/

//Given Data
 const usdAmount = 54;
 const exchangeRateNOKtoUSD = 8.6 / 76; // 1NOK in USD
 const exchangeRateUSDtoNOK = 76 / 8.6; //1 USD in NOK

// Convert USD to NOK
 const nokAmount = Math.floor(usdAmount * exchangeRateUSDtoNOK);
 
 // Convert NOK to USD
 const usdConvertedBack = Math.floor(nokAmount * exchangeRateNOKtoUSD);
 
 printOut(" USD to NOK = " + nokAmount + " NOK" );
 printOut(" NOK to USD = " + usdConvertedBack + " USD");
 


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.
*/

const text = "There is much between heaven and earth that we do not understand.";

// 1. Print the number of characters in the text
printOut("Number of characters: " + text.length);

// 2. Print the character at position number 19
printOut("Character at position 19: " + text.charAt(19));

// 3. Print the characters starting at position number 35 and 8 characters forward
printOut("Characters from position 35, 8 characters forward: " + text.substr(35, 8));

// 4. Print the index at which 'earth' starts in the text
printOut("Index of 'earth': " + text.indexOf("earth"));



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?
*/
// Comparisons

// 1. Is 5 greater than 3?
printOut("Is 5 greater than 3? " + (5 > 3));

// 2. Is 7 greater than or equal to 7?
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));

// 3. Is "a" greater than "b"?
printOut('Is "a" greater than "b"? ' + ("a" > "b"));

// 4. Is "1" less than "a"?
printOut('Is "1" less than "a"? ' + ("1" < "a"));

// 5. Is "2500" less than "abcd"?
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));

// 6. "arne" is not equal to "thomas".
printOut('"arne" is not equal to "thomas"? ' + ("arne" !== "thomas"));

// 7. (2 equals 5) is this statement true?
printOut("(2 equals 5) is this statement true? " + (2 === 5));

// 8. ("abcd" is greater than "bcd") is this statement false?
printOut('("abcd" is greater than "bcd") is this statement false? ' + !("abcd" > "bcd"));

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number
*/

let number1 = parseInt("254");
printOut(' "254" to number: ' + number1);

let number2 = parseFloat("57.23");
printOut(' "57.23" to number: ' + number2);

let number3 = parseInt("25 kroner"); 
printOut(' "25 kroner" to number: ' + number3);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
*/

const r = Math.floor(Math.random() * 360) + 1;

printOut("Random number (r) between 1 and 360: " + r);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*Use modulus (%) to calculate how many weeks and days are in 131 days.
*/
const totalDays = 131;

// Calculate number of weeks and remaining days
const weeks = Math.floor(totalDays / 7); 
const Days = totalDays % 7;              

printOut("Weeks: " + weeks + ", Days: " + Days);




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
exchangeRateNOKtoUSD = 8.6 / 76; // 1NOK in USD
exchangeRateUSDtoNOK = 76 / 8.6; //1 USD in NOK

// Convert USD to NOK
const nokAmount = Math.floor(usdAmount * exchangeRateUSDtoNOK);

// Convert NOK to USD
const usdConvertedBack = Math.floor(nokAmount * exchangeRateNOKtoUSD);

printOut(" USD to NOK = " + nokAmount + " NOK" );
printOut("NOK to USD = " + usdConvertedBack + " USD");

printOut("HELLO");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);



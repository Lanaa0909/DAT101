"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//

function printTodaysDate() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString('no-NB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    printOut(`Today's date in Norwegian format: ${norwegianDate}`);
}

printTodaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
//
function getTodaysDateAndCountdown() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString('no-NB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const releaseDate = new Date('2025-05-14');
    const daysLeft = Math.ceil((releaseDate - today) / (1000 * 60 * 60 * 24));

    printOut(`Today is ${norwegianDate}`);
    printOut(`Countdown to 2XKO release: ${daysLeft} days left! Get ready! 🎮`);
}

getTodaysDateAndCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
//
function circleCalculations(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius ** 2;

    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
}

circleCalculations(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
//
function rectangleCalculations({ width, height }) {
    const circumference = 2 * (width + height);
    const area = width * height;

    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}

rectangleCalculations({ width: 10, height: 5 });


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//
function temperatureConversion(temp, type) {
    let celsius, fahrenheit, kelvin;

    switch(type.toLowerCase()) {
        case 'celsius':
            celsius = temp;
            fahrenheit = Math.round((temp * 9/5) + 32);
            kelvin = Math.round(temp + 273.15);
            break;
        case 'fahrenheit':
            celsius = Math.round((temp - 32) * 5/9);
            fahrenheit = temp;
            kelvin = Math.round((temp - 32) * 5/9 + 273.15);
            break;
        case 'kelvin':
            celsius = Math.round(temp - 273.15);
            fahrenheit = Math.round((temp - 273.15) * 9/5 + 32);
            kelvin = temp;
            break;
        default:
            printOut("Unknown temperature type!");
            return;
    }

    printOut(`Celsius: ${celsius}°C, Fahrenheit: ${fahrenheit}°F, Kelvin: ${kelvin}K`);
}

temperatureConversion(300, 'Kelvin');


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//
function priceWithoutVAT(gross, vatGroup) {
    const vatRates = {
        'normal': 25,
        'food': 15,
        'hotel': 10,
        'transport': 10,
        'cinema': 10
    };

    const vatRate = vatRates[vatGroup.toLowerCase()];
    if (vatRate === undefined) {
        printOut("Unknown VAT group!");
        return NaN;
    }

    const netPrice = (100 * gross) / (vatRate + 100);
    printOut(`Net price (without VAT) for ${vatGroup}: ${netPrice.toFixed(2)}`);
    return netPrice;
}

priceWithoutVAT(125, 'normal');
priceWithoutVAT(100, 'food');
priceWithoutVAT(110, 'hotel');
priceWithoutVAT(150, 'goblins');


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//
function calculateSpeedDistanceTime(distance, time, speed) {
    let result;
    if (speed === undefined && distance !== undefined && time !== undefined) {
        result = distance / time;
        printOut(`Calculated Speed: ${result} units/time`);
    } else if (time === undefined && distance !== undefined && speed !== undefined) {
        result = distance / speed;
        printOut(`Calculated Time: ${result} time units`);
    } else if (distance === undefined && speed !== undefined && time !== undefined) {
        result = speed * time;
        printOut(`Calculated Distance: ${result} units`);
    } else {
        printOut("Error: Please provide exactly two values to calculate the third.");
        return NaN;
    }
    return result;
}

calculateSpeedDistanceTime(100, 2, undefined);
calculateSpeedDistanceTime(undefined, 2, 50);
calculateSpeedDistanceTime(100, undefined, 50);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
//
function modifyTextString(text, maxSize, character, insertAtEnd) {
    while (text.length < maxSize) {
        text = insertAtEnd ? text + character : character + text;
    }
    printOut(text);
    return text;
}

modifyTextString("Hello", 10, "*", true);
modifyTextString("World", 10, "-", false);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
//
function printNumberBlock() {
    let currentNumber = 1;
    const totalLines = 7;

    for (let line = 0; line < totalLines; line++) {
        const leftSide = [];
        const rightSide = [];

        
        for (let i = 0; i < 3; i++) {
            leftSide.push(currentNumber);
            currentNumber++;
        }

       
        currentNumber += 3;

        
        for (let i = 0; i < 3; i++) {
            rightSide.push(currentNumber);
            currentNumber++;
        }

       
        printOut(`${leftSide.join(' ')} = ${rightSide.join(' ')}`);
    }

    printOut("Mathematics is fun!");
}


printNumberBlock();
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}


printOut(`Factorial of 9: ${factorial(9)}`);
printOut(`Factorial of 6: ${factorial(6)}`);
printOut(newLine);

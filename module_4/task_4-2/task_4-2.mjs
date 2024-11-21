"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbersArray.length; i++) {
    printOut(`${numbersArray[i]}`);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const separator = "-";
const joinedArray = numbersArray.join(separator);
printOut(joinedArray);


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const text = "Hei på deg, hvordan har du det?";


const wordsArray = text.split(" ");


for (let i = 0; i < wordsArray.length; i++) {
    printOut(`Word number: ${i + 1}, Index: ${i}, Word: ${wordsArray[i]}`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const names = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit",
    "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", 
    "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];


function removeElementFromArray(array, nameToRemove) {
    const index = array.indexOf(nameToRemove);
    if (index !== -1) {
        array.splice(index, 1); 
        printOut(`"${nameToRemove}" has been removed from the array.`);
    } else {
        printOut(`"${nameToRemove}" does not exist in the array.`);
    } 
}


removeElementFromArray(names, "Ingrid"); 
removeElementFromArray(names, "John"); 


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
const girlNames = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit",
    "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", 
    "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];


const boyNames = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", 
    "Liam", "Håkon", "Theodor", "Magnus"
];


const allNames = [...girlNames, ...boyNames]; 


for (let i = 0; i < allNames.length; i++) {
    printOut(allNames[i]); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
class TBook {
    
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    
    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}


const books = [
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new TBook("1984", "George Orwell", "9780451524935"),
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565")
];


for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString()); 
}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);


const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" }
};


const weekDaysKeys = Object.keys(EWeekDays);


for (let i = 0; i < weekDaysKeys.length; i++) {
    const key = weekDaysKeys[i];          
    const value = EWeekDays[key].value;  
    const name = EWeekDays[key].name;    
    
   
    printOut(`Key: ${key}, Value: ${value}, Name: ${name}`); 
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomNumbers = [];
for (let i = 0; i < 35; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20) + 1); 

}
const ascendingNumbers = [...randomNumbers]; 
ascendingNumbers.sort((a, b) => a - b); 

printOut("Sorted in ascending order:");
printOut(ascendingNumbers.join(", ")); 
printOut(newLine);


const descendingNumbers = [...randomNumbers]; 
descendingNumbers.sort((a, b) => b - a); 


printOut("Sorted in descending order:");
printOut(descendingNumbers.join(", ")); 


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequencyNumbers = [];
for (let i = 0; i < 35; i++) {
    frequencyNumbers.push(Math.floor(Math.random() * 20) + 1);
}


const frequencyMap = {};


frequencyNumbers.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
});


const sortedByFrequency = Object.entries(frequencyMap) 
    .sort((a, b) => {
        
        if (b[1] === a[1]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });


printOut("Numbers and their frequencies:");
sortedByFrequency.forEach(([num, freq]) => {
    printOut(`${num}: ${freq}`);
});


printOut("Frequencies and corresponding numbers:");
let currentFrequency = -1;
let numbersWithSameFrequency = [];

sortedByFrequency.forEach(([num, freq]) => {
    if (freq !== currentFrequency) {
        
        if (numbersWithSameFrequency.length > 0) {
            printOut(`Frequency ${currentFrequency}: ${numbersWithSameFrequency.join(", ")}`);
        }
        currentFrequency = freq;
        numbersWithSameFrequency = [num];
    } else {
       
        numbersWithSameFrequency.push(num);
    }
});


if (numbersWithSameFrequency.length > 0) {
    printOut(`Frequency ${currentFrequency}: ${numbersWithSameFrequency.join(", ")}`);
}

printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const rows = 5;
const columns = 9;


const array2D = [];


for (let i = 0; i < rows; i++) {
    const row = []; 

    for (let j = 0; j < columns; j++) {
       
        row.push(`Row ${i + 1}, Column ${j + 1}`);
    }

    array2D.push(row);
}


for (let i = 0; i < rows; i++) {
    let rowStr = ''; 
    
    
    for (let j = 0; j < columns; j++) {
        rowStr += array2D[i][j] + ' | ';
    }

    
    printOut(rowStr.slice(0, -2)); 
}

printOut(newLine);

printOut(newLine);

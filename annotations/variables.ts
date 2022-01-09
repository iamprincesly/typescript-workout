let apples = 5;
apples = '6';

apples = 6;

apples = '8';

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date;
now = new Date();

// Array
let colors: string[] = ['red', 'green', 'yellow', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialized in later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// let foundWord = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) variable whose type cannot be inferred
let numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

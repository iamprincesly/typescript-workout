const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Help with 'map'
carMakers.map((car: string): string => {
    return car;
});

// Flexivle types
// const importantDates = [new Date(), '2030-10-10'];
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(5455) // Error

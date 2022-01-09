/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-09 16:27:36
 * @modify date 2022-01-09 16:27:36
 * @desc Functions in TypeScript
 */
/**
 * Function to add two numbers
 *
 * @param {number} a
 * @param {number} b
 * @return {number}  a + b
 */
const add = (a: number, b: number): number => {
    return a + b;
};

/**
 * Function to subtract
 *
 * @param {number} a
 * @param {number} b
 * @return {number} a - b
 */
const subtract = (a: number, b: number) => {
    return a - b;
};

/**
 * Function to drive
 *
 * @param {number} a
 * @param {number} b
 * @return {number}  a / b
 */
function divide(a: number, b: number): number {
    return a / b;
}

/**
 * Function to multiply numbers
 *
 * @param {number} a
 * @param {number} b
 * @return {number}  a * b
 */
const multiply = (a: number, b: number): number => {
    return a * b;
};

/**
 * Function that returns nothing
 *
 * @param {string} message
 * @return {void}
 */
const logger = (message: string): void => {
    console.log(message);

    // function that return void can return null and undefined as well
    // return null
    // return undefined;
};

/**
 * Function that returns never
 * means function that will never return
 *
 * @param {string} message
 * @return {*}  {never}
 */
const throwError = (message: string): never => {
    if (!message) {
        throw new Error(message);
    }

    // return message;
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};

/**
 * Type annotations for function parameters
 *
 * @param {{ date: Date; weather: string }} forecast
 */
const logWeather1 = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

/**
 * TypeScript destructuring data from object
 *
 * @param {{ date: Date; weather: string; }} { date, weather }
 */
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};

// ES2015 destructuring
// const logWeather = ({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// };

logWeather1(todaysWeather);
logWeather2(todaysWeather);

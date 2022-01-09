const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);

    // function that return void can return null and undefined as well
    // return null
    // return undefined;
};

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

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// };

// TypeScript destructuring
const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};

// ES2015 destructuring
// const logWeather = ({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// };

logWeather(todaysWeather);

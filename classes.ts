class Vehicle {
    // color: string;

    constructor(public color: string) {
        // this.color = color;
    }

    protected honk(): void {
        console.log('beep beep');
    }
}

const vehicle = new Vehicle();
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(wheels: number, color: string) {
        super(color);
    }
    // Overwrite drive() method of the parent class
    drive(): void {
        console.log('vroom');
    }

    startDrive(): void {
        this.drive();
        this.honk();
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(3443, 'new car');

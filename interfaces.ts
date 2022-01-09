interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar}`;
    },
};

const printSummary = (vehicle: Reportable): void => {
    console.log(`Name ${vehicle.name}`);
    console.log(`Year ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
    console.log(`Summary ${vehicle.summary()}`);
};

printSummary(oldCivic);

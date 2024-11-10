function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        describeCar() {
            console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
        }
    };
}
const car1 = createCar("Toyota", "Camry", 2021);
const car2 = createCar("Honda", "Civic", 2019);
car1.describeCar();
car2.describeCar();
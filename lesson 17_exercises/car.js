class Car {
  brand;
  model;

  constructor(carInfo) {
    this.brand = carInfo.brand;
    this.model = carInfo.model;
    // this.displayInfo();
  }

  displayInfo() {
    return `${this.brand} ${this.model}`;
  }
}

const cars = [
  { brand: 'Toyota', model: 'Coralla' },
  { brand: 'Tesla', model: 'Model 3' },
].map((car) => {
  return new Car(car);
});

cars.forEach((car) => console.log(car.displayInfo()));

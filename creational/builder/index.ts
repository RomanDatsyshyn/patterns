class Car {
  autoPilot: boolean;
  parktronic: boolean;
  signaling: boolean;

  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  car: any;

  constructor() {
    this.car = new Car();
  }

  addAutoPilot() {
    this.car.autoPilot = true;
    return this;
  }

  addParktronic() {
    this.car.parktronic = true;
    return this;
  }

  addSignaling() {
    this.car.signaling = true;
    return this;
  }

  addEngine(engine: String) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const myCar = new CarBuilder()
  .addEngine("V8")
  .addParktronic()
  .addAutoPilot()
  .addSignaling()
  .build();

console.log(myCar);

const myNewCar = new CarBuilder()
  .addEngine("2.0 Turbo")
  .addParktronic()
  .build();

console.log(myNewCar);

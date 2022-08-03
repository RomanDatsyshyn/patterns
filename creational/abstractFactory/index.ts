// Abstract factory
function porsheProducer(type) {
  return type === "sport" ? sportCarsFactory : familyCarsFactory;
}

// Factories
function sportCarsFactory() {
  return new Panamera();
}

function familyCarsFactory() {
  return new Cayenne();
}

class Panamera {
  info() {
    return "Panamera is a sport car";
  }
}

class Cayenne {
  info() {
    return "Cayenne is a family car";
  }
}

// Initializing Abstract factory of sport cars
const produce = porsheProducer("sport");
// Car producing (Factory)
const newCar = produce();

console.log(newCar.info());

// Initializing Abstract factory of family cars
const produce2 = porsheProducer("family");
// Car producing (Factory)
const newCar2 = produce2();

console.log(newCar2.info());
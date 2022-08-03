class Porsche {
  model: PorscheType;
  engine: String;
  price: Number;

  constructor(model: PorscheType, engine: String, price: Number) {
    this.model = model;
    this.engine = engine;
    this.price = price;
  }
}

enum PorscheType {
  cayenne = "Cayenne",
  macan = "Macan",
}

class PorscheFactory {
  create(type: PorscheType) {
    if (type === PorscheType.cayenne) {
      return new Porsche(type, "3.0 V6", 88000);
    }

    if (type === PorscheType.macan) {
      return new Porsche(type, "2.0 turbo", 67000);
    }
  }
}

const factory = new PorscheFactory();

const cayenne = factory.create(PorscheType.cayenne);
const macan = factory.create(PorscheType.macan);

console.log(cayenne);
console.log(macan);

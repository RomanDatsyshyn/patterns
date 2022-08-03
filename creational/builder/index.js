var Car = /** @class */ (function () {
    function Car() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.addAutoPilot = function () {
        this.car.autoPilot = true;
        return this;
    };
    CarBuilder.prototype.addParktronic = function () {
        this.car.parktronic = true;
        return this;
    };
    CarBuilder.prototype.addSignaling = function () {
        this.car.signaling = true;
        return this;
    };
    CarBuilder.prototype.addEngine = function (engine) {
        this.car.engine = engine;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return this.car;
    };
    return CarBuilder;
}());
var myCar = new CarBuilder()
    .addEngine("V8")
    .addParktronic()
    .addAutoPilot()
    .addSignaling()
    .build();
console.log(myCar);
var myNewCar = new CarBuilder()
    .addEngine("2.0 Turbo")
    .addParktronic()
    .build();
console.log(myNewCar);

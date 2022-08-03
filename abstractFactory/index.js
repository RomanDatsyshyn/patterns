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
var Panamera = /** @class */ (function () {
    function Panamera() {
    }
    Panamera.prototype.info = function () {
        return "Panamera is a sport car";
    };
    return Panamera;
}());
var Cayenne = /** @class */ (function () {
    function Cayenne() {
    }
    Cayenne.prototype.info = function () {
        return "Cayenne is a family car";
    };
    return Cayenne;
}());
// Initializing Abstract factory of sport cars
var produce = porsheProducer("sport");
// Car producing (Factory)
var newCar = produce();
console.log(newCar.info());
// Initializing Abstract factory of family cars
var produce2 = porsheProducer("family");
// Car producing (Factory)
var newCar2 = produce2();
console.log(newCar2.info());

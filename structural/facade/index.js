var Conveyor = /** @class */ (function () {
    function Conveyor() {
    }
    Conveyor.prototype.setBody = function () {
        console.log('Body set!');
    };
    Conveyor.prototype.getEngine = function () {
        console.log('Dismantle Engine!');
    };
    Conveyor.prototype.setEngine = function () {
        console.log('Engine set!');
    };
    Conveyor.prototype.setInterior = function () {
        console.log('Exterior added!');
    };
    Conveyor.prototype.getInterior = function () {
        console.log('Exterior!');
    };
    Conveyor.prototype.changeInterior = function () {
        console.log('Update interior!');
    };
    Conveyor.prototype.setExterior = function () {
        console.log('Added interior!');
    };
    Conveyor.prototype.setWheels = function () {
        console.log('Wheels!');
    };
    Conveyor.prototype.addElectronics = function () {
        console.log('Added electronics!');
    };
    Conveyor.prototype.paint = function () {
        console.log('Car painted!');
    };
    return Conveyor;
}());
var ConveyorFacade = /** @class */ (function () {
    function ConveyorFacade(car) {
        this.car = car;
    }
    ConveyorFacade.prototype.assembleCar = function () {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    };
    ConveyorFacade.prototype.changeEngine = function () {
        this.car.getEngine();
        this.car.setEngine();
    };
    ConveyorFacade.prototype.changeInterior = function () {
        this.car.getInterior();
        this.car.setInterior();
    };
    return ConveyorFacade;
}());
var conveyor = new ConveyorFacade(new Conveyor());
conveyor.assembleCar();
conveyor.changeEngine();
conveyor.changeInterior();

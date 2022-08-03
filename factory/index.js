var Porsche = /** @class */ (function () {
    function Porsche(model, engine, price) {
        this.model = model;
        this.engine = engine;
        this.price = price;
    }
    return Porsche;
}());
var PorscheType;
(function (PorscheType) {
    PorscheType["cayenne"] = "Cayenne";
    PorscheType["macan"] = "Macan";
})(PorscheType || (PorscheType = {}));
var PorscheFactory = /** @class */ (function () {
    function PorscheFactory() {
    }
    PorscheFactory.prototype.create = function (type) {
        if (type === PorscheType.cayenne) {
            return new Porsche(type, "3.0 V6", 88000);
        }
        if (type === PorscheType.macan) {
            return new Porsche(type, "2.0 turbo", 67000);
        }
    };
    return PorscheFactory;
}());
var factory = new PorscheFactory();
var cayenne = factory.create(PorscheType.cayenne);
var macan = factory.create(PorscheType.macan);
console.log(cayenne);
console.log(macan);

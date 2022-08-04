var Engine2_0 = /** @class */ (function () {
    function Engine2_0() {
    }
    Engine2_0.prototype.simpleInterface = function () {
        console.log("Engine 2.0 - tr-tr-tr");
    };
    return Engine2_0;
}());
var EngineV8 = /** @class */ (function () {
    function EngineV8() {
    }
    EngineV8.prototype.complecatedInterface = function () {
        console.log("Engine V8! - wroom wroom!");
    };
    return EngineV8;
}());
var EngineV8Adapter = /** @class */ (function () {
    function EngineV8Adapter(engine) {
        this.engine = engine;
    }
    EngineV8Adapter.prototype.simpleInterface = function () {
        this.engine.complecatedInterface();
    };
    return EngineV8Adapter;
}());
var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.startEngine = function (engine) {
        engine.simpleInterface();
    };
    return Auto;
}());
// Engine 2.0
var toyotaCamry = new Auto();
var ecoEngine = new Engine2_0();
toyotaCamry.startEngine(ecoEngine);
// V8 with adapter
var mercedesC63 = new Auto();
var engineAdapter = new EngineV8Adapter(new EngineV8());
mercedesC63.startEngine(engineAdapter);
// Engine V8 without adapter
var car3 = new Auto();
var engine = new EngineV8();
car3.startEngine(engine); // ERROR

var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.sayHello = function () {
        console.log("Hello");
    };
    return Singleton;
}());
var client = function () {
    var singleton1 = Singleton.getInstance();
    var singleton2 = Singleton.getInstance();
    if (singleton1 === singleton2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
    singleton1.sayHello();
};
client();

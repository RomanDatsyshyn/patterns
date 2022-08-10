var networkFetch = function (url) { return "".concat(url, " - response from the backend"); };
var cache = new Set();
var proxiedFetch = new Proxy(networkFetch, {
    apply: function (target, thisArg, args) {
        var url = args[0];
        if (cache.has(url)) {
            return "".concat(url, " - response from the cache");
        }
        else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
});
console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("react.io"));
console.log(proxiedFetch("angular.io"));
// class CarAccess {
//   open() {
//     console.log("Opening car door");
//   }
//   close() {
//     console.log("Closing the car door");
//   }
// }
// class SecuritySystem {
//   door: CarAccess;
//   constructor(door: CarAccess) {
//     this.door = door;
//   }
//   open(password: String) {
//     this.authenticate(password)
//       ? this.door.open()
//       : console.log("Access denied!");
//   }
//   authenticate(password: String) {
//     return password === "Ilon";
//   }
//   close() {
//     this.door.close();
//   }
// }
// const door = new SecuritySystem(new CarAccess());
// door.open("Roman");
// door.open("Ilon");
// door.close();

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ShallowCloner = /** @class */ (function () {
    function ShallowCloner(arr) {
        this.arr = arr;
    }
    ShallowCloner.prototype.clone = function () {
        return __assign({}, this);
    };
    return ShallowCloner;
}());
var DeepCloner = /** @class */ (function () {
    function DeepCloner(arr) {
        this.arr = arr;
    }
    DeepCloner.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return DeepCloner;
}());
var values = [1, 2, 3, 4];
var baseObject1 = new ShallowCloner(values);
var shallowCopy = baseObject1.clone();
console.log("BaseObject1: ".concat(JSON.stringify(baseObject1)));
console.log("ShallowCopy: ".concat(JSON.stringify(shallowCopy)));
shallowCopy.arr[1] = 777;
console.log("BaseObject1: ".concat(JSON.stringify(baseObject1)));
console.log("ShallowCopy: ".concat(JSON.stringify(shallowCopy)));
console.log("\n// ------------------------- //\n");
var baseObject2 = new DeepCloner(values);
var deepCopy = baseObject2.clone();
console.log("BaseObject2: ".concat(JSON.stringify(baseObject2)));
console.log("DeepCopy: ".concat(JSON.stringify(deepCopy)));
deepCopy.arr[1] = 888;
console.log("BaseObject2: ".concat(JSON.stringify(baseObject2)));
console.log("DeepCopy: ".concat(JSON.stringify(deepCopy)));

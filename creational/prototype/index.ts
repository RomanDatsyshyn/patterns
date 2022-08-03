interface Prototype {
  clone(): this;
}

class ShallowCloner implements Prototype {
  arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  clone() {
    return { ...this };
  }
}

class DeepCloner implements Prototype {
  arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  clone() {
    return JSON.parse(JSON.stringify(this));
  }
}

let values = [1, 2, 3, 4];

const baseObject1 = new ShallowCloner(values);
const shallowCopy = baseObject1.clone();
console.log(`BaseObject1: ${JSON.stringify(baseObject1)}`);
console.log(`ShallowCopy: ${JSON.stringify(shallowCopy)}`);

shallowCopy.arr[1] = 777;

console.log(`BaseObject1: ${JSON.stringify(baseObject1)}`);
console.log(`ShallowCopy: ${JSON.stringify(shallowCopy)}`);

console.log("\n// ------------------------- //\n");

const baseObject2 = new DeepCloner(values);
const deepCopy = baseObject2.clone();
console.log(`BaseObject2: ${JSON.stringify(baseObject2)}`);
console.log(`DeepCopy: ${JSON.stringify(deepCopy)}`);

deepCopy.arr[1] = 888;

console.log(`BaseObject2: ${JSON.stringify(baseObject2)}`);
console.log(`DeepCopy: ${JSON.stringify(deepCopy)}`);
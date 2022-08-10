

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

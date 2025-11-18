// console.log("js loaded...");

/**
 * Data Types
 */

// let a = 10; // number
// let b = "Kamal"; // string
// let c = true; // boolean
// let d = null; // null (type is object in JS, but 'null' in TypeScript)
// let f; // undefined (type is 'any' in TS if not explicitly typed)
// let g = { name: "Nuwan", age: 16 }; // object with shape: { name: string; age: number }

/**
 * Arithmetic Operations
 */

// console.log("5 + 5 = ", 5 + 5);
// console.log("10 - 2 = ", 10 - 2);
// console.log("12 * 5 = ", 12 * 5);
// console.log("12 / 4 = ", 12 / 4);
// console.log("14 % 5 = ", 14 % 5);

/**
 * == vs ===
 */

// console.log(10 == "10"); //true   - (== : loose equality) only checks value
// console.log(10 === "10"); //false   - (=== : strick equality)  checks type & value

/**
 * Flow Control
 */

// IF ELSE
// let marks = 75;
// if (marks >= 75) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// SWITCH CASE
// let day = 1;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Another day");
// }

// FOR LOOP
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// WHILE LOOPS
// do {
// something
// } while (condition);

// while (condition) {
//   // something
// }

/**
 * Functions
 */

// Declaration Function
// function greet() {
//   console.log("Hello");
// }
// greet();

// Expression Function
// let greet = function () {
//   console.log("Hello");
// }
// greet();

// Arrow Function
// let greet = () => {
//   console.log("Hello");
// };
// greet();


/**
 * Get Text Filed Input Value -------------
 */
// document.getElementById('input')?.addEventListener('keypress', function (e) {
//   if (e.key === "Enter") {
//     console.log(this.value)
//   }
// })
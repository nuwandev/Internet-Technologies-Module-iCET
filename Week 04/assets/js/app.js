/**
 * Variable Types
 *
 * var , let , const
 *
 * var = global scope/function scope
 * let = local scope
 * const = constraint variable, local scope
 */

// {
//   var a = 10;
//   let b = 10;
//   const c = 3;
// }

// console.log(a);
// console.log(b); cant access
// console.log(c); cant access

let a = 10;
let b = "Kamal";
let c = true;
let d = null;
let e;
let f = { name: "Nuwan", age: 16 };

console.log("a = 10; " + typeof a);
console.log('b = "Kamal"; ' + typeof b);
console.log("c = true; " + typeof c);
console.log("d = null; " + typeof d);
console.log("e; " + typeof e);
console.log('f = { name: "Nuwan", age: 16 }; ' + typeof f);

// a = 10; number
// b = "Kamal"; string
// c = true; boolean
// d = null; object
// e; undefined
// f = { name: "Nuwan", age: 16 }; object

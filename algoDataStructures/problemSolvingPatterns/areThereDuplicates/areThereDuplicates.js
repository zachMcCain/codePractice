/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern
 *
 * Examples:
 *  areThereDuplicates(1, 2, 3) // false
 *  areThereDuplicates(1, 2, 2) // true
 *  areThereDuplicates('a', 'b', 'c', 'a') // true
 *
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 *
 * Bonus:
 * Time - O(n log n)
 * Space - O(1)
 */

 // Simple solution:
 // Iterate through the arguments
 // Check to see if the argument is in object
 // Save each element in an object

function areThereDuplicatesCounter() {
  let count = {};
  for (let i = 0; i < arguments.length; i++) {
    if (count[arguments[i]]) {
      return true;
    }
    count[arguments[i]] = 1;
  }
  return false;
}

function areThereDuplicatesPointers(...args) {
  console.log(Array.isArray(arguments));
  console.log(Array.isArray(args));
  let sorted = args.sort((a, b) => a < b)
  let firstPointer = sorted[0]
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === firstPointer) {
      return true;
    }
    firstPointer = sorted[i];
  }
  return false;
}

function areThereDuplicatesSet() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesCounter(1, 2, 3, 4, 3)); // true
console.log(areThereDuplicatesCounter(1, 2, 4, 4)); // true
console.log(areThereDuplicatesCounter(12, 324, 5)); // false

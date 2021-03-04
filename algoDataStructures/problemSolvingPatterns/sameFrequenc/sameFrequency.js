/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 *
 * Examples:
 *  sameFrequency(182, 281) // true
 *  sameFrequency(34, 14) // false
 *  sameFrequency(3589578, 5879385) // true
 *  sameFrequency(22, 222) // false
 */


function sameFrequency(n1, n2) {
  let string1 = n1.toString()
  let string2 = n2.toString()
  let digits = {};

  for (let i = 0; i < string1.length; i++) {
    let digit = string1[i]
    if (digits[digit]) {
      digits[digit] = digits[digit] + 1;
    } else {
      digits[digit] = 1;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    let digit = string2[j]
    if (digits[digit]) {
      digits[digit] = digits[digit] - 1;
    } else {
      return false;
    }
  }

  let keys = Object.keys(digits);
  for (let k = 0; k < keys.length; k++) {
    let digit = keys[k];
    if (digits[digit]) {
      return false;
    }
  }
  console.log(digits);
  return true;
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(123, 123254))
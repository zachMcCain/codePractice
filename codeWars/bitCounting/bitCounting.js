// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// In: Integer
// Out: Integer - number of bits equal to one in the binary
// Edge Cases:
//

// Convert our input to binary, using to string
// Iterate over the string, keeping a count of the 1s



var countBits = function(n) {
  // Program Me
  let count = 0;
  let binary = n.toString(2);
  binary.split('')
  .forEach(letter => {
    letter === '1' ? count++ : null
  })
  return count
};


// CodeWars version:
// countBits = n => n.toString(2).split('0').join('').length;
// My adaptation:
// countBits = n => n.toString(2).split('0').length;

console.log('Expected retun value should be 3: ', countBits(19));

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps


// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:
// 1 <= n <= 45





function climbingStairs(n) {
  // store a count variable
  let count = 0;
  // create a recursive inner function
  function findSolutions(n) {
    // Create a 2 step for loop
    for (let i = 1; i <= 2; i++) {
      // if the current value is equal to n, increment the count and return
      if (i === n) {
        count++;
        return
        // if it is more than n, return
      } else if (i > n) {
        return
        // if it is less than n, call climbing Stairs on n - the current value
      } else {
        findSolutions(n - i);
      }
    }
  }
  findSolutions(n);
  // return the count variable
  return count;
}

console.log(climbingStairs(14));
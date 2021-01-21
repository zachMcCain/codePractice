/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.


 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 // In: Two singly-linked lists (rather, the first node in the singly linked list)
 // Out: A singly-linked list that represents the sum of the two input lists
 // Constraints:
 // Edge Cases: N/A

 // Examples: [1, 2, 3, 4], [5, 6, 7, 8] -> [6, 8, 0, 3, 1]

 // Iterate through the list, adding the result to an array. If the result is greater than 9, subtract 10 from it and add one extra to the next node combo

var addTwoNumbers = function(l1, l2) {
  // create an array
  let sumArray = [];
  // establish pointers on the first and second lists
  let firstPointer = l1;
  let secondPointer = l2;
  // establish a greater than 10 boolean
  let greater = false;

  // iterate through the first and second lists while next exists
  while (firstPointer && secondPointer) {
    let sum;
    if (greater) {
      // add the values of the next nodes
      sum = firstPointer.value + secondPointer.value + 1;
    } else {
      sum = firstPointer.value + secondPointer.value;
    }
    // if the sum is greater than nine
    if (sum > 9) {
      // set greater to true
      greater = true;
      // subtract 10 from sum
      sum = sum - 10;
      // else
    } else {
      // set greater to false
      greater = false;
    }
    // push sum to sumArray
    sumArray.push(sum);
    // increment the pointers
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  // Iterate through the remainder of l1 or l2
  if (firstPointer) {
    while (firstPointer) {
      if (greater) {
        if (firstPointer.value + 1 < 10) {
          greater = false;
          sumArray.push(firstPointer.value + 1)
        } else {
          sumArray.push(firstPointer.value);
        }
      } else {
        sumArray.push(firstPointer.value);
      }
      firstPointer = firstPointer.next;
    }
  }
  // iterate through the array,
  for (var i = 0; i < sumArray.length; i++) {
    // creating a linked list from the elements

  // return the first node in the new list
  }
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const testAddTwoNumbers = function() {
  let firstNode = new ListNode(1);
  let secondNode = new ListNode(2, firstNode);
  let thirdNode = new ListNode(3, secondNode);
  console.log('first node: ', firstNode, " second node: ", secondNode, ' third node: ', thirdNode);
  // console.log(addTwoNumbers(firstNode, firstNode));
}

testAddTwoNumbers();
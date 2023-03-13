// **Task #3:**

// You are given an array of integers, and you need to write a function that finds the sum of all the positive integers in the array. Your function should take an array of integers as input and return the sum of all the positive integers. If the array contains no positive integers, your function should return 0.

// *Example1*:  given the array [1, -2, 3, 4, -5], your function should return 8.

// *Example2*: given the array [-1, -2, -3], your function should return 0.

// ------------------------------------

function sumPositive(nums) {
  let sum = 0;
  nums.filter((ele) => (ele > 0 ? (sum += ele) : 0));
  return sum;
}

console.log(sumPositive([1, -2, 3, 4, -5]));

console.log(sumPositive([-1, -2, -3]));

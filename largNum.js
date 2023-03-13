// **Task #1:**

// You are given an array of integers, and you need to write a function that finds the two largest numbers in the array. Your function should take an array of integers as input and return an array containing the two largest integers in descending order. If the array contains less than two integers, your function should return null.

// *Example1*: given the array [5, 2, 9, 8, 7], your function should return the array [9, 8].

// *Example2*: given the array [1], your function should return null.

// ------------------------------------

function largNum(nums) {
  if (nums.length < 2) {
    return null;
  } else {
    let larg = nums.sort((a, b) => b - a);
    larg.length = 2;
    return larg;
  }
}

console.log(largNum([5, 2, 9, 8, 7]));

console.log(largNum([1]));

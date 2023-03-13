// **Task #2:**

// You are given an array of strings, and you need to write a function that finds the longest string in the array. Your function should take an array of strings as input and return the longest string. If the array contains no strings, your function should return null.

// *Example1*:  given the array ["apple", "banana", "pear", "kiwi"], your function should return "banana".

// *Example2*: given the array [], your function should return null.

// ------------------------------------

function longString(string) {
  if (string.length === 0) {
    return null;
  } else {
    return string.reduce((acc, ele) => (acc.length > ele.length ? acc : ele));
  }
}

console.log(longString(["apple", "banana", "pear", "kiwi"])); // banana

console.log(longString([])); // null

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
   const complement = target - array[i]
   for (let j = i + 1; j < array.length; j++){
    if (array[j] === complement) return true
   }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space: 0(n)
*/

/* 
  hasTargetSum([1,2,4,5], 6)
  seenNumbers = {
    1: true
    2: true
    3: true
  }
  create an obj to keep track of numbers we've already seen
  iterate through each number in the array 
    for the current num, identify a complement that adds to the target(comp = target  - number)
    check if any key on our obj is the complement
    if so, return true
    otherwise, add that number to the obj

    if I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  make a function called "hasTargetSum" that checks if two numbers from the array add up to the target. 
  for example, I have the array `[1,2,3,4]` and the target is 7. This would return true because 3 and 4 add to 7.
  each number in the array should be checked to see if there's a number that will equal the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

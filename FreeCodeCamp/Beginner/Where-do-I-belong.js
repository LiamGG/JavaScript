// FreeCodeCamp - https://www.freecodecamp.org/challenges/where-do-i-belong

// Return the lowest index at which a value should be inserted

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){ //compares the two numbers being sorted.
    return a-b;    //if returns negative value, sorts a as lower than b.
  });
 return arr.indexOf(num);
}
console.log(getIndexToIns([2, 5, 10], 15));

// FreeCodeCamp - https://www.freecodecamp.org/challenges/chunky-monkey
// Split an array into many arrays of the size provided

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

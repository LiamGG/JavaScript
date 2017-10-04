// FreeCodeCamp - https://www.freecodecamp.org/challenges/diff-two-arrays
function diffArray(arr1, arr2) {
  var uniqueArr1 = arr1.filter(function(item) {
    return arr2.indexOf(item) < 0;
  });
  var uniqueArr2 = arr2.filter(function(item){
    return arr1.indexOf(item) < 0;
  });
  uniques = new Set([...uniqueArr1,...uniqueArr2]);
  return [...uniques];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// FreeCodeCamp - https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;
  for (var i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));

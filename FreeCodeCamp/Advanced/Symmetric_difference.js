// FreeCodeCamp - https://www.freecodecamp.org/challenges/symmetric-difference


function sym() {
  // Takes in 2 sets. [...A] creates an array from the values in the Set A, but .filter... only adds the value if it is not present in the other set
  const diff = (A,B) => {
    var ret = [...A].filter(n => !B.has(n));
    return ret;
  };


  // [...arguments] creates an array from the values in the arguments object
  const result = [...arguments]
    // .map creates a new set from each argument, removing any duplicates
    .map(arr => new Set(arr))
    // .reduce iterates through all the elements until only 1 remains
    // by not defining an intial value in reduce, the first element is used
    // the first time takes the first 2 sets, and then removes any duplicates from the two
    // the new Set is then used against the next one, and then the reultf that against the next one...
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)])); // ...spread syntax withing an array adds the values to the current array, instead of the array itself

  return [...result];
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));

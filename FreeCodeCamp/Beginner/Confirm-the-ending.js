// FreeCodeCamp - https://www.freecodecamp.org/challenges/confirm-the-ending

// Given 2 strings, check if the first ends with the second

function confirmEnding(str, target) {
  var final = str.substring(str.length - target.length, str.length);
  if (final === target) return true;
  else return false;
}

console.log(confirmEnding("Bastian", "ian"));

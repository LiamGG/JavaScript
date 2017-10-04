// FreeCodeCamp - https://www.freecodecamp.org/challenges/reverse-a-string


// Split the string into an array with every character
// Reverse this
// Join them to each other

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

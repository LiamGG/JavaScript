// FreeCodeCamp - https://www.freecodecamp.org/challenges/title-case-a-sentence

// Split the string into array of strings
// For each element of array (word) capitalize the first letter and concatenate the rest of the word.
// Join each elemenet of array (word) with a space inbetween
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }
  return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

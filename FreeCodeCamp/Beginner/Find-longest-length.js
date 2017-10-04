// FreeCodeCamp - https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string

// Capitalise the first letter, concatenate with rest of string
function capitalize(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Create an array from the input, splitting it at whitespace.
// Iterate through the array, checking the length of eah string.
// Compare against th previous longest word and update if necessary.
function findLongestWord(str) {
  var splitWords = str.split(" ");
  var counter = 0;
  var longest;

  for (var i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length > counter) {
      counter = splitWords[i].length;
      longest = splitWords[i];
    }
  }
  return capitalize(longest) + " is the longest word at "+ counter +" letters.";
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

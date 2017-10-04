// FreeCodeCamp - https://www.freecodecamp.org/challenges/check-for-palindromes


function palindrome(str) {
	// Remove characters such as hyphen, ignore case sensitivity
  var main = str.replace(/[\W_]/g, '').toLowerCase();
  	// Reverse the string
  var test = main.split("").reverse().join("");

  //If string (hyphens removed) is the same as itself reversed
  if (main === test){
    return main + " is a palindrome!";
  }
  //if not
  else {
    return main + " is not a palindrome";
  };
}



console.log(palindrome("_eye"));

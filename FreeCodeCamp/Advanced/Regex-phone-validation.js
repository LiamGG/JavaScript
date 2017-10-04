// FreeCodeCamp - https://www.freecodecamp.org/challenges/validate-us-telephone-numbers


function telephoneCheck(str) {
  // /.../ contains the RegEx
  // ^ deontes the start of the string and (1\s?)? allows a "1" or "1 " at the start
  // (\(\d{3}\)|\d{3}) checks for 3 digits that are or aren't between brackets
  // [\s\-]? allows for spaces of dashes between the groups of digits
  // \d{3} checks for 3 digits
  // [\s\-]? allows for spaces of dashes between the groups of digits
  // \d{4} checks for 4 digits
  // $ denotes the end of the string
  // Using ^ and $ here prevents it from matching longer strings that contain a phone number
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  // use .test() to see if the str adheres to the regex
  return regex.test(str);
}

telephoneCheck("555-555-5555");

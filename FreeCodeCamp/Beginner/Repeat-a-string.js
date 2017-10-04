// FreeCodeCamp - https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    str = "";
  }
  else str = str.repeat(num);
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

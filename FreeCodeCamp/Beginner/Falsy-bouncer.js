// FreeCodeCamp - https://www.freecodecamp.org/challenges/falsy-bouncer
// Remove all falsy values from an array

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

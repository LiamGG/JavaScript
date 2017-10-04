// FreeCodeCamp - https://www.freecodecamp.org/challenges/caesars-cipher


function rot13(str) {
  // /g - global. Don't just stop at first match
  return str.replace(/[A-Z]/g, x => String.fromCharCode((x.charCodeAt(0) % 26) + 65));
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));

// FreeCodeCamp - https://www.freecodecamp.org/challenges/mutations

// Return true if all the letters from the second word are in the first.

function mutation(arr) {
  var check = arr[1].toLowerCase();  //Want app not to be case sensitive
  var against = arr[0].toLowerCase();
  for(var i=0; i<check.length; i++){
    if (against.indexOf(check[i]) < 0){
      return false;
    }
  }

  return true;
}
console.log(mutation(["hello", "hey"]));

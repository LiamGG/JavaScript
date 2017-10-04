// FreeCodeCamp - https://www.freecodecamp.org/challenges/seek-and-destroy

function destroyer(arr) {
  //arguments is the arguments passed to the function, in this case arguments[0]=[1, 2, 3 ,1 ,2 , 3], arguments[1]=2, arguments[3]=3
  var remove = Array.from(arguments);
  //index: 0, howmany: 1 ie Remove first argument (the array)
  remove.splice(0, 1);

  //from arr, only return anything that has an index less than 0 (ie, is not in 'remove')
  return arr.filter(function(element){
    return remove.indexOf(element) < 0;
  });
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

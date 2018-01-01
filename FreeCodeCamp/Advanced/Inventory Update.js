// https://www.freecodecamp.org/challenges/inventory-update


function updateInventory(arr1, arr2) {
    // Create a list of the items already in stock for comparison. Keep indexes the same.
    let arr1_items = [];
    for (let stock in arr1) {
        arr1_items.push(arr1[stock][1]);
    }
    
    // From the new inventory, check the index of the item name in the list of items created above
    for (let item in arr2) {
      const index = arr1_items.indexOf(arr2[item][1]);
      // If the index is -1, it's not there so add it to the array. Otherwise, add the amounts together
      if (index === -1) {
        arr1.push(arr2[item]);
      } else {
      	arr1[index][0] += arr2[item][0];
      }
    }
    
    // Sort the list by alphabetical order of the items. Using < or > with strings compares by character until no more or the condition is met
    arr1.sort(function(a,b) {
    	if(a[1] > b[1]) {
    		return 1;
    	}
    	if(a[1] < b[1]) {
    		return -1;
    	}
    	return 0;
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

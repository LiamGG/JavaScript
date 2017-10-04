// FreeCodeCamp - https://www.freecodecamp.org/challenges/exact-change

var cashValue = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
var denoms = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
cashValue = cashValue.reverse();
denoms = denoms.reverse();

function checkCashRegister(price, cash, cid) {
  // Values will be multiplied and then later divided by 100 to avoid errors when subtracting smaller values
  var change = (cash - price) * 100;
  var final = [];
  var sum = 0;

  cid = cid.reverse();

  cid.forEach(item => {
    sum += item[1];
  });

  if (sum * 100 < change) {
    return "Insufficient Funds";
  }
  else if (sum * 100 == change) {
    return "Closed";
  }
  else {
    for (var i = 0; i < cashValue.length; i++) {
      // Count the number of times each denomiation is used
      var count = 0;
      // Value of the current denomination
      var value = cashValue[i] * 100;
      // Value of the amount left of that denomination
      var remaining = cid[i][1] * 100;
      // As long as the change is not negative after deducting the value, and there is cash i nthe register
      while (change - value >= 0 && remaining != 0) {
        // Add one to the count of this denomination
        count += 1;
        // Subtract that value from the change and the remaining amount in the register
        remaining -= value;
        change -= value;
        cid[i][1] = remaining;
      }
      // If the count is not 0 (ie that denomination is used), push the array eg ["PENNY", 0.05] to the final array
      if (count != 0) {
          final.push([denoms[i], count/100 * value]);
      }
    }
    if (change == 0) {
      return final;
    } else {
      return "Insufficient Funds";
    }
  }
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

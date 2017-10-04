// FreeCodeCamp - https://www.freecodecamp.org/challenges/factorialize-a-number


function factorialize(num) {

	//If the number is 1 or 0, the factorial is 1
	if (num === 0 || num === 1) {
		return 1;
	}
	//For the rest, the factorial is n*n-2*n-3*....*2
	return num * factorialize(num-1);
}

console.log(factorialize(5));

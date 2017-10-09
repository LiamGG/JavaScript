// https://www.hackerrank.com/challenges/compare-the-triplets/problem

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    var alice=0, bob = 0;
    (a0 > b0) ? alice += 1 : (b0 > a0) ? bob += 1 : null;
    (a1 > b1) ? alice += 1 : (b1 > a1) ? bob += 1 : null;
    (a2 > b2) ? alice += 1 : (b2 > a2) ? bob += 1 : null;
    
    return [alice, bob];
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
    


}

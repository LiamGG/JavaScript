// https://www.hackerrank.com/challenges/sparse-arrays/problem

function processData(input) {
    var arr = input.split('\n');
    var N = arr.shift();
    var strings = arr.splice(0, N);
    arr.splice(0, 1);
    
    for(var i = 0; i < arr.length; i++) {
        var count = 0;
        for(var j = 0; j < N; j++) {
            if (arr[i] === strings[j]) {
                count++;
            }
        }
        console.log(count);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

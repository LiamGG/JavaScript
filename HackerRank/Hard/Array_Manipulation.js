// https://www.hackerrank.com/challenges/crush/problem

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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    
    var res = [];
    var sum = 0;
    var max = 0;
    
    for (var i = 0; i < n; i++) {
        res.push(0);
    }
    
    for(var a0 = 0; a0 < m; a0++){
        var a_temp = readLine().split(' ');
        var a = parseInt(a_temp[0]);
        var b = parseInt(a_temp[1]);
        var k = parseInt(a_temp[2]);
        
        res[a-1] += k;
        if(b<n) res[b] -= k;
    }
    
    for (var i = 0; i < n; i++) {
        sum += res[i];
        if(max < sum) max = sum;
    }
    console.log(max);
}

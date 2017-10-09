// https://www.hackerrank.com/challenges/dynamic-array/problem

function query1(x, y, seqList, lastAnswer, N) {
    var i = ((x ^ lastAnswer) % N);
    seqList[i].push(y);
    return seqList;
}

function query2(x, y, seqList, lastAnswer, N) {
    var i = ((x ^ lastAnswer) % N);
    return seqList[i][y % (seqList[i].length)];
}

function processData(input) {
    var lastAnswer = 0;
    var arr = input.split('\n');    
    var info = arr.shift().split(' ');
    var N = info[0];
    var Q = info[1];
    
    var seqList = [];
    for(var i = 0; i < N; i++) {
        seqList.push([]);
    }
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ');
        if(arr[i][0] == 1) {
            seqList = query1(arr[i][1], arr[i][2], seqList, lastAnswer, N);
        } else if (arr[i][0] == 2) {
            lastAnswer = query2(arr[i][1], arr[i][2], seqList, lastAnswer, N);
            console.log(lastAnswer);
        }
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

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);
    if (N%2==1) {
        console.log("Weird");
    }
    else if (5>=N>2) {
        console.log("Not Weird");        
    }
    else if (20>=N>6) {
        console.log("Weird");
    }
    else if (20>N) {
        console.log("Not Weird")
    }
    
}

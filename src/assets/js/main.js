function staircase(n) {
    let stairs = "";
    let temp = n;
    let emptyCount = n - 1;

    while (temp != 0) {
        let tEmpty = emptyCount;
        let tFull = n - emptyCount;

        while (tEmpty != 0) {
            stairs += " ";
            tEmpty--;
        }

        while (tFull != 0) {
            stairs += "#";
            tFull--;
        }

        stairs += "\n";
        emptyCount--;
        temp--;
    }

    console.log(stairs);
}

function miniMaxSum(arr) {
    arr = arr.sort();

    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length - 1; i++) minSum += arr[i];

    for (let i = arr.length - 1; i > 0; i--) maxSum += arr[i];

    console.log(minSum, maxSum);
}

function birthdayCakeCandles(candles) {
    
}
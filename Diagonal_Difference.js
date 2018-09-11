function diagonalDifference(arr) {

    var sum1 = 0;
    var sum2 = 0;

    for (var i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][(arr.length - 1) - i];
    }

    return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])); // 15
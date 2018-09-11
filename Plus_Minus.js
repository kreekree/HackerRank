/* Given an array of integers, calculate the fractions of its elements that are positive, 
negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six 
decimal places, though answers with absolute error of up to  are acceptable.

For example, given the array  there are  elements, two positive, two negative and one 
zero. Their ratios would be ,  and . It should be printed as

0.400000
0.400000
0.200000 */

function plusMinus(arr) {

    var pos = arr.filter(function(item, index) {
        return item > 0;
    }).length;

    var neg = arr.filter(function(item, index) {
        return item < 0;
    }).length;

    var zero = arr.filter(function(item, index) {
        return item === 0;
    }).length;

    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6)); 
    console.log((zero / arr.length).toFixed(6));

}

console.log(plusMinus([1,1,0,-1,-1])); // .400000, .400000, .200000
console.log(plusMinus([-4,3,-9,0,4,1])); // 0.500000, 0.333333, 0.166667


/* Given five positive integers, find the minimum and maximum values that can be calculated by summing 
exactly four of the five integers. Then print the respective minimum and maximum values as a single 
line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24

Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one 
line: the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers */

function miniMaxSum(arr) {

    var sortArr = arr.sort();

    var min = sortArr.reduce(function(arr, item, index, array) {
        return arr + item;
    }) - sortArr[arr.length - 1];

    var max = sortArr.reduce(function(arr, item, index, array) {
        return arr + item;
    }) - sortArr[0];

    console.log(min, max);
}



miniMaxSum([1,3,5,7,9]); // 16 24
miniMaxSum([9,1,3,5,7]); // 16 24
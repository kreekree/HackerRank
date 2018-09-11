// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    var newArray = [];
    var k = 0;
    var l = 0;


    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            k++;
        } else if (a[i] < b[i]) {
            l++;
        }
    }

    newArray.push(k,l);

    return newArray;
}

console.log(compareTriplets([17,28,30],[99,16,8])); // [2,1]
console.log(compareTriplets([5,6,7],[3,6,10])); // [1,1]
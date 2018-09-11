/* Sam's house has an apple tree and an orange tree that yield an 
abundance of fruit. In the diagram below, the red region denotes 
his house, where  is the start point, and  is the endpoint. The apple 
tree is to the left of his house, and the orange tree is to its right. 
You can assume the trees are located on a single point, 
where the apple tree is at point , and the orange tree is at point. */

/* When a fruit falls from its tree, it lands  units of distance from its tree of origin 
along the -axis. A negative value of  means the fruit fell  units to the tree's left, 
and a positive value of  means it falls  units to the tree's right.

Given the value of  for  apples and  oranges, determine how many apples and oranges 
will fall on Sam's house (i.e., in the inclusive range )?

For example, Sam's house is between  and . The apple tree is located at  and the 
orange at . There are  apples and  oranges. Apples are thrown  units distance from , 
and  units distance. Adding each apple distance to the position of the tree, they 
land at . Oranges land at . One apple and two oranges land in the inclusive range  
so we print */


function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var appleLand = apples.map(function(value, index) {
        return a + value;
    });

    var orangeLand = oranges.map(function(value, index) {
        return b + value;
    });

    console.log(appleLand, orangeLand);

    var af = appleLand.filter(function(item, value) {
        return item >= s && item <= t;
    }).length;

    var orf = orangeLand.filter(function(item, value) {
        return item >= s && item <= t;
    }).length;

    console.log(af);
    console.log(orf);
}

countApplesAndOranges(7, 10, 4, 12, [ 2, 3, -4], [3, -2, -4]);
countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1], [5, -6]);













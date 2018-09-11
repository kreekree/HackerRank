/* Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size . */

function staircase(n) {
    for (var i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + '#'.repeat(i));
    }
}

staircase(6);
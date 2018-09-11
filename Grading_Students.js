/* HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each 
student's  according to these rules:

If the difference between the  and the next multiple of  is less 
than , round  up to the next multiple of .

If the value of  is less than , no rounding occurs as the result 
will still be a failing grade.

For example,  will be rounded to  but  will not be rounded because 
the rounding would result in a number that is less than .

Given the initial value of  for each of Sam's  students, write code 
to automate the rounding process. */

function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    return grades.map(function(item, value) {
        var oitem = item;
        while (item % 5 !== 0) {
            item++;
        }
        return ((item - oitem) < 3 && item >= 38) ? item: oitem;
     });

}

console.log(gradingStudents([73, 67, 38, 33])); // 


/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in  hour format */

function timeConversion(s) {
    var twelve = /^12/;
    var myregex = /pm/i;
    var myAMregex = /am/i;
    var regex = /[^0]\d*/;

    if (myregex.test(s)) {
        // What if its 12 PM
        if (twelve.test(s)) {
            return s.slice(0,8);
        } else {
            return parseInt(s.match(regex)[0]) + 12 + s.slice(2,8);
        }
    }
    else if (myAMregex.test(s)) {
        if (twelve.test(s)) {
            return "00" + s.slice(2,8);
        } else {
            return s.slice(0,8);
        } 
    } 
}

console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("01:05:45AM")); // 19:05:45
console.log(timeConversion("12:05:39AM")); // 
console.log(timeConversion("12:28:54PM")); // 
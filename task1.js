// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
let arr = [];             //array to store characters from string
let str = "";             //temporary variable to save appended string
let input = prompt("Enter number you want to reverse");       //taking input
//function for reversing string
function reverseNumber(number) {
    for (let i = 0; i < number.length; i++) {          // loop for inserting each character of string to array
        arr.push(number.charAt(i));             //inserting items to array
    }
    //loop for making reversed string from array
    for (let i = arr.length - 1; i >= 0; i--) {
        str = str + arr[i];
    }
    console.log("reverse of" + number + " is " + str);               //printing string
}
reverseNumber(input);           //invoking method
// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
let arr = [];             //array to store characters from string
let str = "";             //temporary variable to save appended string
let input = prompt("Enter String");       // taking input
//function fot sorting string
function sortString(stringTobeSorted) {
    for (let i = 0; i < stringTobeSorted.length; i++) {     //loop for traversing string
        arr.push(stringTobeSorted.charAt(i));       //inserting into array
    }
    arr.sort();                                     //sorting array
    //loop for making sorted string from array
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    console.log("sorted form of " + stringTobeSorted + " is " + str);                       //printing string
}

sortString(input);                    //invoke method
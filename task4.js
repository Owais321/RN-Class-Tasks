// 4. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5 (edited)
let vowelCounter = 0;             //vowel counter
let input = prompt("Enter String to get number of vowels");           //taking input
//function to count vowel
function countVowel(stringForCheck) {
    for (let i = 0; i < input.length; i++) {    //loop for traversering complete string
        if (input.charAt(i) === 'a' || input.charAt(i) === 'e' || input.charAt(i) === 'i' || input.charAt(i) === 'o' || input.charAt(i) === 'u' || input.charAt(i) === 'A' || input.charAt(i) === 'E' || input.charAt(i) === 'I' || input.charAt(i) === 'O' || input.charAt(i) === 'U') // checking if character at location is vowel or not
            vowelCounter++; //counting vowel
    }
    console.log(vowelCounter);  //printing vowel
}
countVowel(input);          //invoke method

let arr = [];             //array to store characters from string
let input = prompt("Enter Sentence whose all first letter you want to capitalize");       //taking input
let str="";         //variable to store final string
input = input.split(' ');     //split by spaces         
//loop for traversing through array
for(let i in input)         
 {
   input[i]= input[i].replace(input[i].substr(0,1),input[i].substr(0,1).toUpperCase());     //replace first letter of every word by its capital
    str=str+" "+input[i];
}   
 console.log(str);          //printing output
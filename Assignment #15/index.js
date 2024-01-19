 
//  Chapter 35 - 37 (Functions)  //


// function displayAlert() {
//     console.log("Hello World");
// }



// function askName() {
//     var userName = prompt("Enter name:");
//     console.log("Hello, " + userName + "!");
// }
// askName();



// function mainFunction() {
//     functionOne();
//     functionTwo();
// }
// function functionOne() {
//     console.log("This is Function 1");
// }
// function functionTwo() {
//     console.log("This is Function 2");
// }
// mainFunction();



// function displayPromptAndAlert() {
//     var enteredName = prompt("Enter name:");
//     if (enteredName !== null && enteredName !== "") {
//       alert("You entered: " + enteredName);
//     } else {
//       alert("No name entered");
//     }
//   }
//   displayPromptAndAlert();


 
// function concatenateAndAssign(param1, param2) {
//     var result = param1 + param2;
//     console.log("Concatenated result:", result);
//   }
//   concatenateAndAssign("Hello", "World");
  


// function multiplyAndAssign(param1, param2, param3) {
//     result = param1 * param2 * param3;
//     return result;
// }
// let product = multiplyAndAssign(3, 3, 2);
// console.log(product); 



// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
// }
// const numbersArray = [5, 10, 15, 20];
// const result = calculateAverage(numbersArray);
// console.log(result); 



// function addNumbers(a, b) {
//     const sum = a + b;
//     return sum;
// }
// const result = addNumbers(7, 6);
// console.log(result);



// function test(a) {
//      var age = new Date();
//      var userAge = new Date(a);
//      console.log(age.getFullYear() - userAge.getFullYear());
// }
// test('06-12-1990');
   


// function isWordInArray(word, array) {
//     const lowercaseArray = array.map(item => item.toLowerCase());
//     const lowercaseWord = word.toLowerCase();
//     const isPresent = lowercaseArray.includes(lowercaseWord);
//     return isPresent;
//   }
//   const wordToCheck = 'hussain';
//   const myArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//   const result = isWordInArray(wordToCheck, myArray);
//   console.log(result); 




// function repeatLetter(letter) {
//     if (typeof letter !== 'string' || letter.length !== 1) {
//       throw new Error('Input is single character string.');
//     }
//     const repeatedString = letter.repeat(10);
  
//     return repeatedString;
//   }
//   const letterOfRepeat = 'r';
//   const result = repeatLetter(letterOfRepeat);
//   console.log(result);
  



// function reverseArray(a) {
//     var rev = a.toString().split("").reverse().join("");
//     return rev
// }
// var d = ['a', 'b', 'c', 'd', 'e'];
// var e = reverseArray(d);
// console.log(e);




// function reverse(a) {
//     var rev = a.toString().split("").reverse().join("");
//     return rev;
// }
// var t = reverse(54321);
// console.log(t);




// function checkPalindrome(word){
//     let b = word;
//     let a = word;
// a = a.split("").reverse().join("")
// if (a == b){
//     console.log(word + " ")
// } else {
//     console.log(word + " ")
// }
// }
// checkPalindrome("wow");
// checkPalindrome("madam");




// function word(userInput) {
//     let a = userInput;
//     a = a.split(" ")
//     for(var i=0; i < a.length; i++){
//         a[i] = a[i].slice(0, 1).toUpperCase() + a[i].slice(1).toLowerCase();
//     }
//     a = a.join(" ");
//     return a;
// }
// var b = word("i am junaid kamal");
// console.log(b);




// Chapter 38 (Local vs. Global Variables) //


// function demoLocalVariable() {
//     let localVar = "I am a local variable.";
//     console.log(localVar);
//     localVar = "Modified local variable.";
//     console.log(localVar);
//   }
//   demoLocalVariable();


  

// let globalVar = "I am a global variable.";
// function accessGlobalVariable() {
//   console.log(globalVar);
// }
// accessGlobalVariable();

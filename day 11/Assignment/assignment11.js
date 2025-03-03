/*
Part 1: Objects & Methods

Problem 1: Create a Student Management System (Using Objects) 

Task:
Create an object student that has the following properties: 
• name (string) 
• rollNumber (number) 
• marks (object containing subject-wise marks) 
• getAverageMarks (method that calculates and returns the average of all subjects) 
• checkPassOrFail (method that checks if the student has passed. A student is considered 
passed if their average marks are above 40.) 
*/

// // Problem 1: Create a student Management System (Using Objects).
// const student = {
//     name: "Aryan Kumar",
//     rollNumber: 101,
//     marks: {Math:80,Science:65,English:50,History:70},
//     getAverageMarks:function(){
//         let totalsum = 0;
//         let average;
//         for(let values in student.marks){
//             totalsum+=student.marks[values];
//             average = totalsum/Object.keys(student.marks).length;
//         }
//         console.log(average);
//     },
//     checkPassOrFail:function(){
//         let passmarks = 40;
//         for(let values in this.marks){
//             if(this.marks[values]<passmarks){
//                 console.log(`${this.name} = Fail`)
//                 return "Fail";
//             }else{
//                 console.log(`${this.name} = Pass`)
//                 return "Pass";
//             }
//         }
//     }
// }
// student.getAverageMarks();
// student.checkPassOrFail();


/*
Problem 2: Library System (Nested Objects & Methods)

Task: 
Create an object library that contains a books object, where each book has the following details: 
• title (string) 
• author (string) 
• availableCopies (number) 
• borrowBook (method that reduces the availableCopies by 1 if copies are available) 
• returnBook (method that increases the availableCopies by 1)
*/

// const library = {
    
//     books:{
//         "Atomic Habits": {author: "James Clear", availableCopies: 3},
//         "The Alchemist": {author: "Paulo Coelho", availableCopies: 5},
//     },
//     borrowBook: function(bookName){
//         if(this.books[bookName]){
//             if(this.books[bookName].availableCopies>0){
//                 this.books[bookName].availableCopies--;
//                 console.log(`Purchased book (${bookName})`);
//             }
//             else{
//                 this.books[bookName].availableCopies<0;
//                 console.log("This book is out of stock");
//             }
//         }
//     },
//     returnBook: function(bookName){
//         if(this.books[bookName]){
//             if(this.books[bookName].availableCopies>0){
//                 this.books[bookName].availableCopies++;
//                 console.log(`Returned book (${bookName})`);
//             }
//         }
//     }
// }

// library.borrowBook("Atomic Habits");
// console.log(`Available books: ${library.books["Atomic Habits"].availableCopies}`);
// library.returnBook("Atomic Habits")
// console.log(`Available books: ${library.books["Atomic Habits"].availableCopies}`);




/*
Part 2: Conditions & Loops 

Problem 3: Generate Multiplication Table (For Loop) 

Task: 
Write a function generateTable(num, limit) that prints the multiplication table of a given num up to 
limit.
*/

// // Problem 3: Generate Multiplication Table (For Loop)
// function Multiplication(){
//     let num = 11;
//     for(let i=1; i<num; i++){
//         console.log(`${5} X ${i} = ${i*5}`)
//     }
// }
// Multiplication();


/*
Problem 4: FizzBuzz (If-Else Conditions) 

Task: 
Write a function fizzBuzz(n) that prints numbers from 1 to n, but: 
• Print "Fizz" if the number is a multiple of 3 
• Print "Buzz" if the number is a multiple of 5 
• Print "FizzBuzz" if the number is a multiple of both 3 and 5 
• Otherwise, print the number itself
*/

// function fizzbuzz(n){
//     if(n%3 == 0 && n%5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if(n%3 == 0){
//         console.log("Fizz")
//     }
//     else if(n%5 == 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(n)
//     }
// }
// function output(){
//     let num = 16;
//     for(let i=1; i<num; i++){
//         fizzbuzz(i);
//     }
// }
// output()


/*
Part 3: String & Array Manipulations 

Problem 5: Reverse a String Without Using .reverse()

Task: 
Write a function reverseString(str) that takes a string and reverses it without using .reverse() 
method.
*/

// function reverseString(str){
//     let reverse = "";
//     for(let i=str.length -1; i>=0; i--){
//         reverse+=str[i];
//     }
//     return reverse;
// }
// console.log(reverseString("JavaScript"))


/*
Problem 6: Remove Duplicates from an Array

Task: 
Write a function removeDuplicates(arr) that removes duplicate elements from an array without 
using Set(). 
*/

// function removeDuplicates(arr){
//     let userarray = [];
//     for(let i = 0; i<arr.length; i++){
//         if(userarray.indexOf(arr[i]) ===- 1){
//             userarray.push(arr[i]);
//         }
//     }
//     return userarray;
// }
// console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));



/*
Problem 7: Find the Longest Word in a Sentence 
Task: 
Write a function longestWord(sentence) that finds the longest word in a given sentence.
*/

// function longestWord(sentence){
//     let longest = "";
//     let defword = sentence.split(" ");
//     for(let word of defword){
//         if(word.length>longest.length){
//             longest = word;
//         }
//     }
//     return longest
// }
// console.log(longestWord("Coding is amazing and challenging"));

/*
Part 4: Higher-Level Thinking

Problem 8: Custom Array Method (Creating Your Own .map())

Task: 
JavaScript has a built-in .map() method, but can you create your own version of it? Write a function 
myMap(arr, callback) that takes an array and a callback function and applies the callback to each 
element.
*/

// function myMap(arr, callback){
//     let final = [];
//     for(let i=0; i<arr.length; i++){
//         final.push(callback(arr[i], i, arr));
//     }
//     return final;
// }
// function myCallback(num){
//         return num * 2;
//     }
// console.log(myMap([1, 2, 3, 4], myCallback));


/*
Problem 9: Find the First Non-Repeating Character in a String

Task: 
Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given 
string.
console.log(firstUniqueCharacter("aabbcddce"))
*/

// function firstUniqueCharacter(str){
//     let repetchar = {};
//     for(let char of str){
//         repetchar[char] = (repetchar[char] || 0) +1;        
//     }

//     for(let char of str){
//         if(repetchar[char] === 1){
//             return char;
//         }
//     }
//     return null;
// }

// console.log(firstUniqueCharacter("aabbcddce"));



/*
Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target 

Task: 
Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given 
target.
*/

// function findPairs(arr, target){
//     let fp = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j= i + 1; j<arr.length; j++){
//             if(arr[i]+arr[j] === target){
//                 fp.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return fp;
// }

// console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));

// class Stack{
//     constructor() {
//         this.Stack = [];
//     }
//     push(el) {
//         this.Stack.push(el);
//     }
//     pop() {
//         if(this.isEmpty()){
//             return "Array is Empty"
//         }
//         return this.Stack.pop();
//     }
//     peek() {
//         if(this.isEmpty()){
//             return "Array is Empty"
//         }
//         return this.Stack[this.Stack.length -1];
//     }
//     isEmpty() {
//         return this.Stack.length === 0;
//     }
// }

// let myStack = new Stack;
// myStack.push(10);
// myStack.push(20);
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.isEmpty());
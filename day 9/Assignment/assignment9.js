// (1️) What will be the output of the following code? Explain why.

// let x = "5";
// let y = 5;
// console.log(x==y); //output= true (Beacause x and y value is same)
// console.log(x===y); // output = false (Beacause x and y value is same but type is not same)



// (2️) How can you find the length of the longest word in this array? 
// const words = ["JavaScript", "Programming", "Function", "Hoisting"];

// I can find the length of the longest word in this array like this

// const words=["JavaScript", "Programming", "Function", "Hoisting"]
// console.log("the length of "+words[0]+" "+"("+words[0].length+")")
// console.log("the length of "+words[1]+" "+"("+words[1].length+")")
// console.log("the length of "+words[2]+" "+"("+words[2].length+")")
// console.log("the length of "+words[3]+" "+"("+words[3].length+")")
// console.log("And the longest word is "+words[1])


// (3️) What will be logged in the console? Explain your answer.

// function testScope() { 
//     if (true) { 
//         var a = 10; 
//         let b = 20; 
//         const c = 30; 
//     } 
//     console.log(a); 
//     console.log(b);
//     console.log(c);
// }
// testScope();
// Output = 10
// because Here var is global variable can access anywhere. But let and const is local variable cannot possible to access globaly so local access is possible.


// 4️ Rewrite the following function using const and fix any issues.

// here it is with const variable
// var name = "John";
// function greet(){
//     if (true){
//         const message = "Hello" + name;
//         console.log(message);
//     }
// }
// greet();


// (5) Convert this traditional function into an arrow function without changing the output.

// let multiply=(a, b)=>{ 
//     return a * b; 
// }
// let a = 10;
// let b = 2;
// console.log(multiply(10,2))


// (6️) What will be the output? Explain why. 
// const obj = { 
//     name: "Alice", 
//     sayHello: function() { 
//         setTimeout(() => { 
//             console.log("Hello, " + this.name); 
//         }, 1000); 
//     } 
// }; 
// obj.sayHello();
// Output will be (Hello Alice). Because (Hello Alice) called inside console.log() for get result on console, but 1000 is not called inside console.


// (7️) What will be the output of this code? Explain why. 

// console.log(a);
// var a = 10;

// console.log(b); 
// let b = 20;

// The output will be (Undefined) ReferenceError. Because here (a) string var and it is global but its Cannot access (a) before initialization. And the second one is ReferenceError because Cannot access (b) before initialization.


// (8️) Rearrange the following function so it works correctly, explaining the problem. 
 
// console.log(square(5)); 
// function square(n) { 
//     return n * n; 
// } 
// console.log(double(4)); 
// var double = function(n) { 
//     return n * 2; 
// };
// Here is the problem with double because, double is not a function it is string, and js not allow to call reserved keyword as userdefine keyword, Also the another problem is, var is global but its Cannot access (double) before initialization, here double is called before initialize. 

// The correct one is, below:
// console.log(square(5)); 
// function square(n) { 
//     return n * n; 
// } 
// console.log(double(4)); 
// function double(n){ 
//     return n * 2; 
// };

// (9) What will be the output of the following expressions?
// console.log(5 + "5");  // 55  
// console.log(5 - "3");  // 2  
// console.log(5 * "2");  // 10  
// console.log("10" / 2); // 5 
// console.log(10 % "3"); // 1

// The output will be
// 55
// 2
// 10
// 5
// 1

// (10) Rewrite this code using shorthand assignment operators. 
// let x = 10; 
// x = x + 5; 
// x = x * 2; 
// x = x - 3; 
// x = x / 2;

// Answer:

// let x = 10; 
// x = ((((x + 5)*2)-3)/2); 
// console.log(x)

// (1️1️) What will be logged in the console? Explain why. 
// console.log(5 > 3 && 10 < 20); // because it's need to be correct both relation operation if any is incorrect then it will be false because of "and" operator
// console.log(5 > 3 || 10 > 20); // because if any relation operation is correct then it will be true because of "or" operator
// console.log(!(5 > 3)); //5 is not equal to 3 because of "not" operator it is incorrect so it will be false

// (12) What will be the output of the following function?

// function sum(a, b, c = 5) { 
//     return a + b + c; 
// } 
// console.log(sum(2, 3));  
// console.log(sum(2, 3, 10)); 

// The output will be: 10 and 15

// (1️3️) Write a function that takes any number of arguments and returns their sum.

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10, 10))
// // output: 20

// (14) Fix the following function to work correctly and explain the issues.
// function outer() { 
//     let count = 0; 
//     return function inner() { 
//         count++; 
//         console.log(count); 
//     }; 
// } 
// const counter1 = outer();
// counter1(); 
// counter1();
// const counter2 = outer();
// counter2();
// counter2();

// Here is the problem with (count) this (let count = 0) written inside the outer function, so the counter1 is not sharing the data with counter 2, on the other hand its just separate the data.

//After fixing this 

// let count = 0;
// function outer() { 
//     return function inner() { 
//         count++; 
//         console.log(count); 
//     }; 
// } 
// const counter1 = outer();
// counter1(); 
// counter1();
// const counter2 = outer();
// counter2();
// counter2();

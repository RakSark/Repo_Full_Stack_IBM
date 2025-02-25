// console.log(this);

// let obj = {
//     name:"Bot bhai",
//     class:"BTech",
//     myFunction:function(){

//         console.log(this);
//         console.log(this.name,this.class);
//         console.log("I am a method inside object");
//     },
//     subjects:["DBMS", "CN", "AI", "ML", "DL"],
//     newobj:{
//         1:80,
//         nestedFunction:function(){
//             console.log(this);
//             console.log("I am nested method of object")
//         },

//     }
// }

// obj.myFunction();

// obj.newobj.nestedFunction();

// condition
// let num1 = 10, num2 = 20;
// if (num1<num2) {
//     console.log(`${num1} is less than ${num2}`);
// }else if(num1==num2){
//     console.log(`${num1} is not less than ${num2}`);
// }else{
//     console.log(`${num1} is not less than ${num2}`);
// }

// Let suppose you have one num and you have to check for num like:
// if num will be multiple of 3 then print "Fizz"
// if num will be multiple of 5 then print "Buzz"
// if num will be multiple of 3 then print "Fizz Buzz"


// num = 88;

// if (num%3 == 0 && num % 5 == 0){
//     console.log("Fizz Buzz")
// }
// else if(num%5 == 0 && !(num%3 == 0)){
//     console.log("Fizz")
// }
// else if(num%3 == 0 && !(num%5 == 0)){
//     console.log("Buzz")
// }
// else{
//     console.log("not Fizz Buzz")
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i], i);
// }

// let str = "Raktim sarkar"
// for(let i=0; i<str.length; i++){
//     console.log("a"+str[i])
// }

// let num = 5
// for loop
// for (let i=1; i<num; i++){
//     console.log(i)
// }

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"]

// // for of loop
// for (const num of arr) {
//     console.log(num)    
// }

// While loop
// let num = 0;

// while(num<10){
//     num++;
// }

let arr = [4,33,45,65];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
// let name = "synchronous";
// console.log(name)
// let surname = "code";
// console.log(surname)
// // stTimeout, setInterval, setImmediate both are using macrotask
// //Promise, queMicrotask both are using microtask(promise has high priority)
// // have two parameter anonymus, timedelay

// //Macro Task:
// setTimeout(() => {
//     console.log("Asynchronously running")
// },1000);
// setTimeout(()=>{
//     console.log("Synchronously syncing:- 1")
// },2000)

// setTimeout(()=>{
//     console.log("Synchronously syncing:- 2")
// })


// // Micro Task:
// queueMicrotask(()=>console.log("Micro Task synchronus"))

// //using forloop
// for(let i=0; i<5; i++){
//     console.log(i)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
//     console.log(i)
// }

// console.log(name,surname)

// Promise

// fullfil 
// pending
// reject

// let myPromise = new Promise((resolve, reject)=>{
//     let flag = true;

//     if(flag){
//         resolve("Promises is resolved with green flag")
//     }
//     else{
//         reject("Promise is rejectd with red flag")
//     }
// })

// async function fetchData(){
//     // it wiil have one parameter api
//     let data = await fetch("https://fakestoreapi.com/users");
//     let ans = await data.json()
//     console.log(ans);

// }
// fetchData();

async function fetchData(){
   try {
       // it wiil have one parameter api
        let data = await fetch("https://fakestoreapi.com/users");
        let ans = await data.json()
        console.log(ans);
   } catch (error) {
    console.log(error)
   } 

}

fetchData();
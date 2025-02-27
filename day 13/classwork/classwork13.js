// let arr = [1,2,3,4,"5",5,6,"rocket",7,8,9,10,"rajesh",11,12,13,14,15,16,17,18]
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// arr.forEach((index, el)=>{ // it will take two things element and index
//     console.log(el, index)
// });

// let and = arr.forEach((el, i)=>{
//     return el
// });
// console.log(ans)

// let ans = arr.map((el, i)=>{
//     return el**2;
// })
// console.log(ans);

// forEach default is undefine, and perform task but return nothing
// map perform task and return value

// filter:

// let output = arr.filter((el, i)=>{
//     return el%2==0 && el !==6;
// });

// console.log(output)

// let output = arr.filter((el, i)=>{
//     return typeof el =="string" || el%5==0;
// });

// console.log(output)

// reduce:

// let output = arr.filter((el, i)=>{
//     return el%5 == 0;
// }).map((el, index)=>{
//     return el*2;
// }).map((el, index)=>{
//     return el*2;
// }).reduce((acc, el)=>{
//     return acc+el;
// })

// console.log(output)
// let output = arr.reduce((acc, el)=>{
//     return acc*el;
// });

// console.log(output)

// acc is like value + element
// acc(accumulator) default value is array first value

// let arr = [3,5,1,8,5,34,94,60,43,45,66,83,23]

// let output = arr.sort((a, b)=>{
//     return b-a;
// });

// console.log(output)

let data = [
    {name: "watch", price: 400500, desc:"Good watch", rating:5},
    {name: "shoe", price: 1200, desc:"Good shoe", rating:5},
    {name: "car", price: 9859, desc:"Good phone", rating:5},
    {name: "laptop", price: 7000, desc:"Good laptop", rating:5},
    {name: "headphone", price: 6000, desc:"Good headphone", rating:5},
    {name: "bag", price: 3000, desc:"Good bag", rating:5},
]

// console.log(data)

// data.sort((a, b)=>{
//     return a.price-b.price
// })

data.sort((a, b)=>{
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    if (nameA<nameB){
        return-1;
    }

    if(nameA>nameB){
        return 1;
    }
})

console.log(data)
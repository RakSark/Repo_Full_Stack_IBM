let str = "SV University"; // String is emutable you can not change string.

// console.log(str.length);
// console.log(str.length-1);
// console.log(str[2]);
// console.log(str[str.length-1])
// str[0]="r";
// console.log(str)

let arr = [1, 2, 3, "raktim",0, 1.12, true, false, null, undefined, ""] // inside array call element
// console.log(typeof arr[0])
// console.log(typeof arr[1])
// console.log(typeof arr[2])
// console.log(typeof arr[3])
// console.log(typeof arr[4])

console.log(arr[arr.length -2])
console.log(arr[3])
// arr.push("rocket")
// console.log(arr)
// arr[4]="rocket"

// arr.pop();

// console.log(arr);

// arr.splice(45)
// console.log(arr)

let obj = { // obj always use alphabatic order
    vname1:{class:"B Tech", rn:195, subjects:["NM", "DBMS", "DSA", "RM"]},
    name2:{class:"B Tech", rn:196, subjects:["NM", "DBMS", "DSA", "RM"]},
    1: undefined,
}

// console.log(obj)

// obj.vname1="my name"
// console.log(obj)

delete obj.name2 //for delete element for obj
// console.log(obj)
obj.sname3 = {rn: 123, class: "M.tech", hobbies:["cycling", "reading"]}//for assign element for obj
// console.log(obj)

// Object Literal
// Using new Keyword
// Constructor

// console.log(typeof obj.name1.class)
// console.log(obj.name1.class)

// let name = "Aman Mahato";
// let Class = "B Tech";
// let hobbies = ["Games", "Singing"]

// let newObj = {
//     name, Class, hobbies
// }

// console.log(newObj) //👌

// let ans = [1, 2, 3, [9, 4, 6, [5, 1, 9]]];

// console.log(ans[3][3][0]); //👍

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13}
    }
}

delete superHeroes[1].villains[0].health
console.log(superHeroes
)
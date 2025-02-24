// let x = "5";
// let y = 5;

// console.log(x==y); // Beacause x and y value is same
// console.log(x===y); // Beacause x and y value is same but type is not same

// I can find the length of the longest word in this array like this

// const words=["JavaScript", "Programming", "Function", "Hoisting"]
// console.log("the length of "+words[0]+" "+"("+words[0].length+")")
// console.log("the length of "+words[1]+" "+"("+words[1].length+")")
// console.log("the length of "+words[2]+" "+"("+words[2].length+")")
// console.log("the length of "+words[3]+" "+"("+words[3].length+")")
// console.log("And the longest word is "+words[1])

function testScope() { 
    if (true) { 
        var a = 10; 
        let b = 20; 
        const c = 30; 
    } 
    console.log(a); 
    console.log(b);
    console.log(c);
} 
testScope();
const student = {
    name: "Pluto Patos",
    rollNumber: 44,
    marks: {Math:80,Science:65,English:50,History:70},

    getAverageMarks:function(){
        let totalsum = 0;
        let average;
        for(let values in student.marks){
            totalsum+=student.marks[values];
            average = totalsum/Object.keys(student.marks).length;
        }
        return console.log(average);
    },
    checkPassOrFail:function(){
        if(Object.values(student.marks)){
            console.log("fail");
        }
        else{
            console.log("pass");
        }
    }
}

// student.getAverageMarks();
student.checkPassOrFail();
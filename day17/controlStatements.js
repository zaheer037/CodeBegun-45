// if and else statements
// if else if else statements

// if statement 
var _marks=25;
if(_marks>24){
    console.log("Pass!!")
}else if(_marks==24){
    console.log("Just Pass")
}
else{
    console.log("Fail")
}

//netsed if else blocks

var _myInternalMarks=20;
var _myExternalMarks=23;

//pass = Internal Marks + External Marks >= 40
// Internal marks >= 16
// External marks >= 24

if(_myInternalMarks+_myExternalMarks>=40){
    if(_myInternalMarks>=16){
        if(_myExternalMarks>=24){
            console.log("Congrats you passed in exam!!")
        }else{
            console.log("Student is failed in External Marks")
        }
    }else{
        console.log("Student is failed in Internal Marks")
    }
}
else{
    console.log("Student is failed in total marks")
}

//for loops
// for loop example
for (var i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// while loop example
var count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// do-while loop example
var num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);

// switch statement example
var grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Fair");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Fail");
}

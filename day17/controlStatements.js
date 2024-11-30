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

var _myInternalMarks=16;
var _myExternalMarks=24;

//pass = Internal Marks + External Marks >= 40
// Internal marks >= 16
// External marks >= 24

if(_myInternalMarks+_myExternalMarks>=40){
    if(_myInternalMarks>=16){
        if(_myExternalMarks>=24){
            console.log("Congrats you passed in exam!!")
        }else{
            console.log("Student is failed")
        }
    }else{
        console.log("Student is failed")
    }
}
else{
    console.log("Student is failed")
}
function addTwoNumbers(){
    setTimeout(function(){
        console.log("Adding two numbers");
        callme()
    },2000)
}

function callme(){
    console.log("Called")
}

addTwoNumbers();


// callback hell - imp for interview

//Promises

//Promise Chaining methods

//async and await

//js will executes code in a synchronous way, so inorder to implement asynchronous model we moved to promises(async,await)
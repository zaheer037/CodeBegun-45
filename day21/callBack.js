// function addTwoNumbers(){
//     setTimeout(function(){
//         console.log("Adding two numbers");
//         callme()
//     },2000)
// }

// function callme(){
//     console.log("Called")
// }

// addTwoNumbers();


// callback hell - imp for interview

//Promises

//Promise Chaining methods

//async and await

//js will executes code in a synchronous way, so inorder to implement asynchronous model we moved to promises(async,await)


function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var x = true;
            if (x) {
                resolve("step 1 is completed");
            } else {
                reject("error");
            }
        }, 2000)
    })
}
step1().then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});
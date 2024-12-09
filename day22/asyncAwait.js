function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var x = true;
            if (x) {
                console.log("step1 is completed");
                resolve("step1 result"); // Resolve with a value
            } else {
                reject("error occurred in step1");
            }
        }, 2000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log("step2 is completed");
                resolve("step2 result");
            } else {
                reject("error occurred in step2");
            }
        }, 2000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log("step3 is completed");
                resolve("step3 result");
            } else {
                reject("error occurred in step3");
            }
        }, 2000);
    });
}

function step4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log("step4 is completed");
                resolve("step4 result");
            } else {
                reject("error occurred in step4");
            }
        }, 2000);
    });
}

function step5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log("step5 is completed");
                resolve("step5 result");
            } else {
                reject("error occurred in step5");
            }
        }, 2000);
    });
}

//async and await


async function promiseCall() {
    try {
        var step1results = await step1();
        console.log(step1results);

        var step2results = await step2();
        console.log(step2results);

        var step3results = await step3();
        console.log(step3results);

        var step4results = await step4();
        console.log(step4results);

        var step5results = await step5();
        console.log(step5results);

    } catch (error) {
        console.log(error);
    }
}

promiseCall();
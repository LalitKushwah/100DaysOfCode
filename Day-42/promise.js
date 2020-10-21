console.time()

function first (param) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(param + 1 )
        }, 2000)
    });
}

function second (param) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(param + 1 )
        }, 2000)
    });
}

function third (_param) {
    return new Promise((_resolve,reject) => {
        setTimeout(() => {
            reject('err')
        }, 2000)
    });
}




// first(1).then(data =>  {
//     second(data)
//     console.log('=========== 34 ==========');
// });
// .then(secRes => third(secRes)).then(response => console.log(response));
async function displayResult() {
    try {
        const firstRes = await first(1);
        const secondRes = await second(firstRes);
        const finalRes = await third(secondRes);
        console.timeEnd();
    } catch(err) {
        console.log(err)
        console.timeEnd();
    }
}
displayResult();

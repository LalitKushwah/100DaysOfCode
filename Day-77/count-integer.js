const obj = {
    a :1,
    b: 'Hello',
    c: {
        d: {
            e : 5,            
        },
        f: [3, 5,6]
    },
    g: {
        h: 10
    },
    i: 10
}

const keys = Object.keys(obj);
let sum = 0;
if (keys.length) {
    keys.forEach(i => {
        if (typeof obj[i] === 'number') {
            sum = sum + obj[i];
        }
    })
    console.log(sum)
}
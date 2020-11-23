// https://www.hackerrank.com/challenges/jesse-and-cookies/problem

function cookies(k, A) {
    let temp = A;
    let count = 1;
    if (temp[0] > k) return count;
    if (!temp.length) return -1;
    for (let i = 0; i < temp.length; i++) {
        let sum = 0;
        sum = temp[i] * 1 + temp[i+1] * 2;
        if (sum < k) {
            count++;
            temp.splice(i, 2);
            const index = temp.findIndex(item => item >= k);
            temp.splice(index, 0, k);
        } else {
            return count;
        }
    }
    return -1;
}

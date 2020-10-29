// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

function reverse(curr) {
    let temp = curr.next;
    curr.next = curr.prev;
    curr.prev = temp;
    return temp == null ? curr : reverse(temp);
}
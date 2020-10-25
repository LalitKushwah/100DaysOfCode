// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem

function getNode(head, positionFromTail) {
    let temp = head;
    let counter = 0;
    while(temp.next) {
        counter++;
        temp = temp.next;
    }
    for (let i=1; i <= (counter - positionFromTail); i++) {
        head = head.next;
    }
    return head.data;

}
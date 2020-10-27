// https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
function findMergeNode(headA, headB) {
    let currA = headA;
    let currB = headB;
    // if (headA === headB) return headA.data;
    while(currA !== currB) {
        if (currA.next === null) {
            currA = headB;
        } else {
            currA = currA.next;
        }
        if (currB.next === null) {
            currB = headA;
        } else {
            currB = currB.next;
        }
    }
    return currB.data;

}
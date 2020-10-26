// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function removeDuplicates(head) {
    if (!head) return null;
    let nextNode = head.next;
    const first =  head;
    while(nextNode) {
        if (head.data === nextNode.data) {
            const temp = nextNode;
            head.next = temp.next;
            nextNode = nextNode.next;
        } else {
            head = head.next;
            nextNode = nextNode.next
        }
    }
    return first;

}

// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
if ((head == null) || (head.next == null)) return false;
if ((head.next == head)) return true;
while (head != null) {
    if (head.data == 123454323) {
        return true;
    } else {   
        head.data = 123454323;         
        head = head.next;
    }
}
return false;
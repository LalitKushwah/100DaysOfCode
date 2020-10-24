//  https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem

function mergeLists(head1, head2) {

    let dummyNode = new SinglyLinkedListNode();
     let tail = dummyNode;
     while(true){    
     if(!head1){
         tail.next = head2;
         break;
     }
     if(!head2){
         tail.next = head1;
         break;
     }
     if(head1.data <= head2.data){
         tail.next = head1;
         head1 = head1.next;  
     }else{
         tail.next = head2;
         head2 = head2.next;
     }    
     tail = tail.next;}
     return dummyNode.next;
  }
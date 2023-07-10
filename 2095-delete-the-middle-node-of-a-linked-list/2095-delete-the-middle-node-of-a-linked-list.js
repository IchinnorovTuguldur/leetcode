/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next == null){
        head = null;
        return head;
    }
    let len = 1;
    let curr = head.next;
    while(curr.next !== null){
        curr = curr.next;
        len++;
    }
    
    let middle = Math.ceil(len/2);
    let counter = 0;
    let curr2 = head;
    while(counter < middle-1 && curr2.next !== null){
        curr2 = curr2.next;
        counter++;
    }
    if(counter+1 == middle){
        let prev = curr2;
        let temp = curr2.next.next;
        curr2.next.next = null;
        curr2 = temp;
        prev.next = curr2;
    }
    return head;
};
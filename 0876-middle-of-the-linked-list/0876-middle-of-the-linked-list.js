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
var middleNode = function(head) {
    let curr = head;
    let len = 1;
    while(curr.next !== null){
        len++;
        curr = curr.next;
    }
    let middle = Math.floor(len/2)+1;
    let counter = 1;
    let curr2 = head;  
    while(counter < middle){
        counter++;
        curr2 = curr2.next;
    }
    return curr2;
};
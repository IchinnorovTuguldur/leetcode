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
var oddEvenList = function(head) {
    if(head == null){
        return null;
    }
    let curr = head;
    let second = head.next;
    let len = 1;
    let prevGlobal = curr;

    while(curr.next !== null){
        let prev = curr.next;
        curr.next = curr.next.next;
        prevGlobal = curr;
        curr = prev;
        len++;
    }
    if(len%2 !== 0){
        curr.next = second;   
    }else{
        prevGlobal.next = second;
    }
    // console.log(head)
    return head;
};
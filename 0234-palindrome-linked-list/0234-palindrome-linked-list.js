/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head;
    let vals = [];
    let len = 1;
    
    while(curr.next !== null){
        vals.push(curr.val);
        curr = curr.next;
        len++;
    }
    vals.push(curr.val);
    
    for(let i=0; i<(len/2); i++){
        if(vals[i] !== vals[vals.length-1-i]){
            return false;
        }
    }
    return true;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let sums = [];
    let vals = []
    let len = 1;
    let curr = head;
    while(curr.next !== null){
        vals.push(curr.val);
        curr = curr.next;
        len++;
    }
    vals.push(curr.val);
    
    for(let i=0; i<(len/2); i++){
        let sum = vals[i]+vals[vals.length-i-1];
        sums.push(sum);
    }
    console.log(sums);
    let max = Math.max(...sums);
    return max;
};
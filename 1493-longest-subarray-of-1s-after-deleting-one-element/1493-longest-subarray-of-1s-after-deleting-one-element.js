/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeros = 0;
    let start = 0;
    let end = 0;
    
    while(end < nums.length){
        if(nums[end] == 0){
            zeros++;
        }
        end++;
        if(zeros>1){
            if(nums[start] == 0){
                zeros--;
            }
            start++
        }
    }
    return end-start-1;
};
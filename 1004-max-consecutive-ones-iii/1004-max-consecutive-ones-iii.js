/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeros = 0;
    let start=0;
    let end=0;

    
    while(end<nums.length){
        if(nums[end] == 0){
            zeros++; 
        }
        end++;
        if(zeros > k){
            if(nums[start] == 0){
                zeros--;
            }
            start++;
        }        
    }
    return end-start;
};
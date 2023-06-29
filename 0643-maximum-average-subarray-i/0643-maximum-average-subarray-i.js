/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    for(let j=0; j<=nums.length-k; j++){
        let sum = 0;
        for(let i=j; i<k+j; i++){
            sum += nums[i];
        }
        max = Math.max(max, sum);
    }
    return max/k;
};
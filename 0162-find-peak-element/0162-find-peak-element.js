/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let peak = nums[0];
    
    for(let i=1; i<nums.length-1; i++){
        if(nums[i] > peak && nums[i] > nums[i+1]){
            peak = nums[i];
        }
    }
    if(nums[nums.length-1] > peak){
        peak = nums[nums.length-1]
    }
    return nums.indexOf(peak);
};
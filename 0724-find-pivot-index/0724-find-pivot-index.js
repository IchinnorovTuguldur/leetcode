/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot = 0;
    let leftSum = 0;
    let sum = 0;
    
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    
    let rightSum = sum-nums[0];
    if(leftSum === rightSum){
      return pivot;
    }
    
    while(pivot < nums.length){
        if(rightSum === leftSum){
            return pivot;
        }
      
        leftSum += nums[pivot];
        rightSum = sum - nums[pivot+1] - leftSum;
        pivot++;
    }
    return -1;
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros = 0;
    let originalLen = nums.length;

    for(let i=0; i<nums.length; i++){
      if(nums[i] == 0){
          zeros++;
      }
    }
    let tracker = 0;
    for(let j=0; j<nums.length; j++){
        if(nums[tracker] == 0){
            nums.splice(tracker,1);
            nums.push(0);
        }else{
            tracker++;
        }
    }
    return nums;
};
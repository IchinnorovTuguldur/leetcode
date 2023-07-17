/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    
    while(left < right){
        let mid = left - Math.trunc((right-left)/2);
        if(numbers[left] + numbers[right] < target){
            left += 1;
        }else if(numbers[left] + numbers[right] > target){
            right -= 1;
        }else{
            break;
        }
    }
    return [left+1,right+1];
};
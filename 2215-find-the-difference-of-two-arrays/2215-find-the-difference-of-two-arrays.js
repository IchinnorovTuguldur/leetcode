/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [[],[]];
    for(let e in nums1 ){
        if(!nums2.includes(nums1[e]) && !answer[0].includes(nums1[e])){
            answer[0].push(nums1[e]);
        }
    }
    for(let e in nums2){
        if(!nums1.includes(nums2[e]) && !answer[1].includes(nums2[e])){
            answer[1].push(nums2[e]);
        }
    }
    return answer;
};
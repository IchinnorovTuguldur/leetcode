/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let left = 0;
    let right = Math.max(...candies);
    
    while(left <= right){
        let mid = left + Math.trunc((right-left)/2);
        let contains = 0;
        for(let i=0; i<candies.length; i++){
            contains += Math.floor(candies[i]/mid);
        }
        if(contains >= k){
            left = mid+1;
        }else if(contains < k){
            right = mid-1;
        }
    }
    return right;
};
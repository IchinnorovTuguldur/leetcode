/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    function calculateNumKid(min_candy) {
        let count = 0;
        for (let candy of candies){
            count += Math.floor(candy / min_candy);  
        } 
        return count >= k;
    }

    let left = 0;
    let right = Math.max(...candies);

    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (calculateNumKid(mid)){
            left = mid + 1;  
        }else{
            right = mid - 1;  
        } 
    }
    return right;
};

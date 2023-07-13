/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if(guess(n) == 0){
        return n;
    }
    
    let left = 1;
    let right = n;
    let mid = Math.ceil((left+right)/2);
    
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(guess(mid) == -1){
            right = mid;
        }else if(guess(mid) == 1){
            left = mid;
        }else{
            return mid
        }
    }
    return mid
};




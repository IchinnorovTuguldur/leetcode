/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let requiredHours = 0;
    
    while(left < right){
        let mid = Math.floor((left+right)/2);
        for(let i=0; i<piles.length; i++){
            requiredHours += Math.ceil(piles[i]/mid);
        }
        if(requiredHours > h){
            left = mid+1;
        }else{
            right = mid;
        }
        requiredHours = 0;
    }
    return Math.max(left,right);
};
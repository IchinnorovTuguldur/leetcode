/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    function findPotions(key,arr){
        let low = 0; 
        let high = arr.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] < key) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    
    let pairs = [];
    let pushed = false;
    potions.sort((a,b) => a - b );
    
    for(let i=0; i<spells.length; i++){
        let minPotion = Math.ceil(success / spells[i]);
        let index = potions.indexOf(minPotion);
        let numPotions = findPotions(minPotion, potions);
        pairs.push(potions.length - numPotions);   
    }
    
    return pairs;
};
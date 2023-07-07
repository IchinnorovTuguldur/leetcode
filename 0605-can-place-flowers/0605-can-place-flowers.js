/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
     let possible = 0;
    if(flowerbed[0] == 0 && flowerbed[1] === 0){
        flowerbed.splice(0,1,1);
        possible++;
    }
    for(let i=1; i<flowerbed.length-1; i++){
        if(flowerbed[i] == 0 && flowerbed[i+1] == 0 && flowerbed[i-1] == 0){
            possible++;
            flowerbed.splice(i,1,1);
        }
    }
    if(flowerbed[flowerbed.length-1] == 0 && flowerbed[flowerbed.length-2] === 0){
        possible++;
    }

    if((flowerbed.length == 1 && flowerbed[0] == 0) || possible >= n){
        return true;
    }
    return false;
};
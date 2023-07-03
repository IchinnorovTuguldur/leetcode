/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let arrMap = new Map();
    for(let e in arr){
        if(!arrMap.has(arr[e])){
            arrMap.set(arr[e],1);
        }else{
            arrMap.set(arr[e],arrMap.get(arr[e])+1);
        }
    }
    
    let prev = [];
    
    for(let [key,value] of arrMap){
        if(!prev.includes(value)){
            prev.push(value);
        }else{
            return false;
        }
    }
    return true;
};
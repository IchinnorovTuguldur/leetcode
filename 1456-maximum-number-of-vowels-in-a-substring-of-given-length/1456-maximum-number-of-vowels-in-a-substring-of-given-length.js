/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function(s, k) {
 let vowels = ["a","e","i","o","u"];
    let i=0;
    let j=0;
    let count = 0
    
    while(j < k){
        if(vowels.includes(s[j])){
            count++;
        }
        j++;
    }
    let maxCount = count; 
    
    while(j < s.length){
        if(vowels.includes(s[j])){
            count++;
        }
        if(vowels.includes(s[i])){
            count--;
        }
        maxCount = Math.max(maxCount, count);
        i++;
        j++;
    }
    return maxCount;
};
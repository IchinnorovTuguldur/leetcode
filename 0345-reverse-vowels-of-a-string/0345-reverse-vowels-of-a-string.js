/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {  
    let vowels = ['a','e','i','o','u','A','E','I','O','U',];
    let start = 0;
    let end = s.length-1;
    let arr = s.split("");
    
    while(start < end){
        if(!vowels.includes(s[start])){
            start++;
        }
        if(!vowels.includes(s[end])){
            end--;
        }
        if(vowels.includes(s[start]) && vowels.includes(s[end])){
            arr.splice(start,1,s[end]);
            arr.splice(end,1,s[start]);
            start++;
            end--;
        }
    }
    s = arr.join("");
    return s;
};
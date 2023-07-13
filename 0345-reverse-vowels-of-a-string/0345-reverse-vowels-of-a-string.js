/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split("");
    let vowels = ['a','e','i','o','u','A','E','I','O','U',];
    let elements = [];
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            elements.push(s[i]);
        }
    }

    for(let j=0; j<s.length; j++){
        if(vowels.includes(s[j])){
            arr.splice(j,1,elements[elements.length-1]);
            elements.pop();
        }
    }
    s = arr.join("");
    return s;
};
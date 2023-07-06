/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = "";
    
    for(let i=0; i<word1.length; i++){
        if(word1[i] !== undefined && word2[i] !== undefined){
            answer += word1[i] + word2[i];
        }
    }
    
    if(word1.length > word2.length){
        let len = word1.length - word2.length;
        answer += word1.slice(word1.length - len, word1.length);
    }else{
        let len = word2.length - word1.length;
        answer += word2.slice(word2.length - len, word2.length);
    }
    return answer;
};
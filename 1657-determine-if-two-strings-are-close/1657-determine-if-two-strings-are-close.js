/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word2.length !== word1.length){
        return false;
    }
    
    let wordMap =  new Map();
    for(let e in word1){
        if(!wordMap.has(word1[e])){
            wordMap.set(word1[e],1);
        }else{
            wordMap.set(word1[e],wordMap.get(word1[e])+1);
        }
    }
    
    let wordMap2 =  new Map();
    for(let e in word1){
        if(!wordMap2.has(word2[e])){
            wordMap2.set(word2[e],1);
        }else{
            wordMap2.set(word2[e],wordMap2.get(word2[e])+1);
        }
    }
    
    let occurences = [];
    
    for(let [key,value] of wordMap){
        occurences.push(value);
    }
    
    for(let e in word2){
        if(occurences.includes(wordMap2.get(word2[e])) && wordMap.has(word2[e])){
            let index = occurences.indexOf(wordMap2.get(word2[e]));
            occurences.splice(index,1);
            wordMap2.delete(word2[e]);
        };
    }
    if(wordMap2.size == 0){
        return true;
    }
    return false;
};





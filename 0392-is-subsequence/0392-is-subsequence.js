/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let tArr = t.split("");
    let sArr = s.split("");

    for(let i=0; i<s.length; i++){
        if(tArr.includes(sArr[i])){
            let idx = tArr.indexOf(sArr[i]);
            tArr = tArr.slice(idx+1, tArr.length);
        }else{
            return false;
        }
    }
    return true;
};
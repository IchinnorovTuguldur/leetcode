/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let partitions = [];
    let curr = "";
    for(let i=0; i<s.length; i++){
        if(!curr.includes(s[i])){
            curr+=s[i];
        }else{
            partitions.push(curr);
            curr = s[i];
        }
    }
    partitions.push(curr);
    return partitions.length;
};
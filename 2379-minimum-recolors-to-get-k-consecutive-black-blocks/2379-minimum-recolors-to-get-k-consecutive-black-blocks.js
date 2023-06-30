/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let operations = k;
    for(let i=0; i<=blocks.length-k; i++){
        let currOperations = 0;
        for(let j=i; j<k+i; j++){
            if(blocks[j] == "W"){
                currOperations++;
            }
        }
        operations = Math.min(currOperations,operations);
    }
    return operations;
};
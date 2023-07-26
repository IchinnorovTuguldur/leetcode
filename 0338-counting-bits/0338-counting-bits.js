/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n+1).fill(0);
    for(let i=1; i<=n; i++){
        let ones = Math.trunc(i/2);
        let left = i % 2;
        ans[i] = ans[ones] + left;
    }
    return ans;
};
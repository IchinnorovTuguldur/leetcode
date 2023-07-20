/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n == 0){
      return 0;
    }else if(n == 1 || n == 2){
      return 1;
    }
    let i = 3;
    let arr = [0,1,1];
    while(i <= n){
        let sum = arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3]
        arr.push(sum);
        i++;
    }
    return arr[arr.length-1];
};
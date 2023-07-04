/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    
    for(let i=0; i<asteroids.length; i++){
        let flag = true;
        while(stack.length !== 0 && stack[stack.length-1]>0 && asteroids[i] < 0){
            if(Math.abs(asteroids[i]) > Math.abs(stack[stack.length-1])){
                stack.pop();
                continue;
            }else if(Math.abs(asteroids[i]) === Math.abs(stack[stack.length-1])){
                stack.pop();
            }
            flag = false;
            break;
        }
        if(flag){
            stack.push(asteroids[i]);
        }
    }
    return stack;
};
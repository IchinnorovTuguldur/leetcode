/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    var left = 1;
    var right = 1e7;
    var speed  = -1;
    
    while(left <= right){
        var mid = Math.floor((right+left)/2);
        var requiredTime = 0;
        for(let j=0; j<dist.length-1; j++){
            requiredTime += Math.ceil(dist[j]/mid);
        }
        requiredTime += dist[dist.length-1]/mid;
        
        if(requiredTime > hour){
            left = mid+1;
        }else if(requiredTime <= hour){
            right = mid-1;
            speed = mid;
        }
    }
    return speed;
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[1]-b[1]);
    let arrow = 1;
    let currentX = points[0][1];
    for(let i=1; i<points.length-1; i++){
        if(currentX >= points[i][0]){
            currentX = Math.min(currentX,points[i][1]);
        }else{
            arrow++;
            currentX = points[i][1];
        }
    }
    if(currentX < points[points.length-1][0]){
      arrow++;
    }
    return arrow;
};
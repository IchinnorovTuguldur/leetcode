var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = [];
    let area = 0;
    
    for(var i=left; i<height.length; i++){
        let distance = right-left;
        area = Math.min(height[left],height[right])*distance;
        max.push(area);
        if(height[left]<=height[right]){
            left++;
        }else{
            right--;
        }
    }
    return Math.max(...max);
};
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    let numRemove = [];
    let uniqueIntervals = [intervals[0]];
    
    for(let i=1; i<intervals.length; i++){
        if(uniqueIntervals[uniqueIntervals.length-1][1] <= intervals[i][0]){
            uniqueIntervals.push(intervals[i]);
        }
    }
    return intervals.length - uniqueIntervals.length;
};
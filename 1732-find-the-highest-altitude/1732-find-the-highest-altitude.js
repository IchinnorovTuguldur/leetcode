/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = [0];
    for(let i=0; i<gain.length; i++){
        let temp = altitude[altitude.length-1] + gain[i];
        altitude.push(temp);
    }
    // console.log(altitude);
    return Math.max(...altitude);
};
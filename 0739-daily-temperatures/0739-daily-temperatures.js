/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let warmestDays = [];
    
    for(let i=0; i<temperatures.length; i++){
        let added = false;
        for(let j=i+1; j<temperatures.length; j++){
            if(temperatures[i] < temperatures[j]){
                warmestDays.push(j-i);
                added = true;
                break;
            }
        }
        if(added == false){
          warmestDays.push(0);
        }
    }
    return warmestDays;
};
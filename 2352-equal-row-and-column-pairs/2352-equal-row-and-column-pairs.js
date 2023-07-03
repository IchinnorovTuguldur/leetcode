/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {    
    let columns = [];
    
    for(let j=0; j<grid[0].length; j++){
        let column = [];
        for(let row in grid){
            column.push(grid[row][j])
        } 
        columns.push(column);
    }
    
    let answer = 0;
    for(let i=0; i<columns.length; i++){
        for(let j=0; j<grid.length; j++){
            if(JSON.stringify(columns[i]) === JSON.stringify(grid[j])){
                answer++;
            }   
        }
    }
    return answer;
};
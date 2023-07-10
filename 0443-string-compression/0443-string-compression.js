/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = "";
    let counter = 1;
    let idx = 0;
    for(let i=0; i<chars.length; i++){
        if(chars[i] === chars[i+1]){
            counter++;
        }else{
            if(counter > 1){
                s += chars[i] + counter;
                chars.splice(idx,1,chars[i]);
                
                if(counter > 9){
                    let splitted = counter.toString().split("");
                    for(let j=0; j<splitted.length; j++){
                        chars.splice(idx+1,1,splitted[j]);
                        idx++;
                    }
                }else{
                    chars.splice(idx+1,1,counter.toString());
                    idx++;   
                }
            }else{
                s += chars[i];
                chars.splice(idx,1,chars[i]);
            }
            counter = 1;
            idx++;
        }
    }
    chars.splice(s.length,chars.length);
    return chars.length;
};
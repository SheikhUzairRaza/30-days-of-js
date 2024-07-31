//Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

var compose = function(functions) {
    
    return function(x) {
        for(let i = functions.length-1; i>=0 ;i--){
            x=functions[i](x);
        }
        return x;
    }
};

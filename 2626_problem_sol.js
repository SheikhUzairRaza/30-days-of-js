//Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
var reduce = function(nums, fn, init) {
    let total = init;
    for(let i = 0 ; i<nums.length;i++){
        total = fn(total,nums[i])
    }
    return total;
};
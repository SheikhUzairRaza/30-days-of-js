var map = function(arr, fn) {
    let tempArr = [];
    arr.forEach((v,i)=>{
        tempArr[i]=fn(v,i);
    })
    return tempArr;
};
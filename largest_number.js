const arr = [2, 10000000, 500000, 1];
const length = arr.length;


function findMax(arr,length) {
    let largestNumber = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber
}

console.log(findMax(arr, arr.length))


//Time complexity is Order of n
//Space complexity is Order of 1
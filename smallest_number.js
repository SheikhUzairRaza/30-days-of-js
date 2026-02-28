const arr = [10, -1, -3, 4];
const length = arr.length;
//minimum number code
const minInArr = (arr, length) => {
    let min = arr[0]
    for (let i = 1; i < length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

const minimum = minInArr(arr, length)
console.log(minimum)

//Time complexity is Order of n
//Space complexity is Order of 1


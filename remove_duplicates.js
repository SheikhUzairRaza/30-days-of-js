//remove duplicates from non-dec sorted array & return count of unique elements 
function removeDuplicatesFromNonDecSortedArray(arr) {
    let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
      }
    }
    return i+1;
}

let arr = [0, 0, 1, 2, 3]
console.log(removeDuplicatesFromNonDecSortedArray(arr))
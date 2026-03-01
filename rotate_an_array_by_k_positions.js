function rotateElementBykInPlace(arr, k) {
  k = k % arr.length
  if (k === 0) return arr
  arr.unshift(...arr.splice(arr.length - k, k))
  return arr
}
function rotateElementBykNotInPlace(arr, k) {
    k = (k % (arr.length))
    if(k===0) return arr
  const newArr = arr.slice(arr.length - k).concat(arr.slice(0, arr.length - k))
  return newArr
}
// in originalArray
function rotateAnArrayByKInPlaceWithoutBuiltInMethod(arr, k) {
  k = k % arr.length
  if (k === 0) return arr
  reverseAnArrayUsingWhileLoop(arr, 0, arr.length - 1)
  reverseAnArrayUsingWhileLoop(arr, 0, k - 1)
  reverseAnArrayUsingWhileLoop(arr, k, arr.length - 1)
}
function reverseAnArrayUsingWhileLoop(arr, leftPtr, rightPtr) {
  while (leftPtr < rightPtr) {
    swap(arr, leftPtr, rightPtr)
    leftPtr++
    rightPtr--
  }
}
// Swapping two elements
function swap(arr, firstElem, secondElem) {
  ;[arr[secondElem], arr[firstElem]] = [arr[firstElem], arr[secondElem]]
}

let arr = [10, 20, 30, 40, 50, 60, 70]
let k = 3
rotateAnArrayByKInPlaceWithoutBuiltInMethod(arr, k)
console.log(arr)




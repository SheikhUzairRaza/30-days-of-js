//Reversing an array using while loop
function reverseAnArrayUsingWhileLoop(arr) {
  let leftPtr = 0
  let rightPtr = arr.length - 1
  while (leftPtr < rightPtr) {
    swap(arr, leftPtr, rightPtr)
    leftPtr++
    rightPtr--
  }
}
// Reversing an array using for loop
function reverseAnArrayUsingForLoop(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    swap(arr, i, arr.length - 1 - i)
  }
}
// Swapping two elements
function swap(arr, firstElem, secondElem) {
  ;[arr[secondElem], arr[firstElem]] = [arr[firstElem], arr[secondElem]]
}

const arr = [1, 3, 4, 5, 9]
// reverseArrayUsingWhileLoop(arr)
reverseAnArrayUsingForLoop(arr)
console.log(arr)

//Time complexity is O(n) because of n/2 iterations as constant get ignored swapping time complexity is constant(O(1))
//Space Complexity is O(1)



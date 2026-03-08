//remove duplicates from non-dec sorted array
let arr = [0,0,1,2,3]
for (let j = 1; j <= n; j++) {
  let i = 0
  if (arr[i] !== arr[j]) {
    i++
    arr[i] = arr[j]
    }
}

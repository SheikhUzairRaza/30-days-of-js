//Time complexity of this approach is O(n^2)
function count_frequency(original_array) {
  const visited = [false, false, false, false, false]
  for (
    let indexOriginalArray = 0;
    indexOriginalArray < original_array.length;
    indexOriginalArray++
  ) {
    let count = 1
    if (visited[indexOriginalArray] === true) {
      continue
    }
    visited[indexOriginalArray] = true
    for (let j = indexOriginalArray + 1; j < original_array.length; j++) {
      if (original_array[indexOriginalArray] === original_array[j]) {
        visited[j] = true
        count += 1
      }
    }
    console.log(`count of ${original_array[indexOriginalArray]} is ${count}`)
  }
}

//TIme Complexity of this approach is O(n)
function count_frequency_2nd(original_array) {
    const obj = {}
    for (let element of original_array) {
        obj[element]=(obj[element]||0)+1
    }
    return obj
}

// same as second one
// O(n) (linear time)
function count_frequency_3rd(original_array) {
    const myMap = new Map();
    let count=0
    for (let element of original_array) {
        myMap.set(element,(myMap.get(element)||0)+1)
    }
    console.log(myMap)
    return myMap
}

const original_array = [1, 2, 9, 3, 4, 2, 3, 9, 9, 9, 9]
count_frequency_3rd(original_array)
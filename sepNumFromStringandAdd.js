let s = 'xiii021?2s24s?'
let str = '',
  sum = 0
for (let traversalIndex = 0; traversalIndex < s.length; traversalIndex++) {
  if (/^\d+$/.test(s[traversalIndex])) {
    str += s[traversalIndex]
  } else {
    sum += parseInt(str) || 0

    //or
    // sum += parseInt(str)
    // str = "0";
    str = ''
  }
}
if (parseInt(str)) {
  sum += parseInt(str)
}

console.log(sum)
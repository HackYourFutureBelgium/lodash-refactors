const arr = [1, 2, 4, 8, 16];

const vanilla1 = arr.reduce((sum, n) => sum + n, 0)
const lodash1 = null; // reduce arr using lodash

console.assert(JSON.stringify(vanilla1) === JSON.stringify(lodash1), "first assert");



const obj = { a: 1, b: 2, x: 1, m: "2" };

const vanilla2 = Object.entries(obj).reduce((result, [key, value]) => {
  ; (result[value] || (result[value] = [])).push(key)
  return result
}, {})
const lodash2 = null; // reduce obj using lodash

console.assert(JSON.stringify(vanilla2) === JSON.stringify(lodash2), "second assert");

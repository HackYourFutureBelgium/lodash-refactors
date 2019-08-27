const arr1 = [1, [2, [3, [4]], 5]];
const vanilla1 = arr1.reduce((a, b) => a.concat(b), []);
const lodash1 = null; // use lodash!
console.assert(JSON.stringify(vanilla1) === JSON.stringify(lodash1), "first assert")

const arr2 = [[1, [2]], [3, [4]], 5]];
const vanilla2 = arr2.reduce((a, b) => a.concat(b), []);
const lodash2 = null; // use lodash!
console.assert(JSON.stringify(vanilla2) === JSON.stringify(lodash2), "second assert")

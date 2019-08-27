const vanillaSize = item => (item.constructor === Object ? Object.keys(item).length : item.length)

const arr = [1, 2, 3, null];
cosnt vanilla1 = vanillaSize(arr);
const lodash1 = null; // use lodash!
console.assert(vanilla1 === lodash1, "first assert");



const obj = { a: 1, b: 2, x: ["3", false] };
const vanilla2 = vanillaSize(obj);
const lodash2 = null; // use lodash!
console.assert(vanilla2 === lodash2, "second assert");


const str = "many tables";
const vanilla3 = vanillaSize(str);
const lodash3 = null; // use lodash!
console.assert(vanilla3 === lodash3, "third assert");

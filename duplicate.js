let chars = ['a','b','c','e','e','f']
console.log(chars.indexOf('e'));
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
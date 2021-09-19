const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-import-invoked');

console.log(data);
console.log(names);
console.log(sayHi);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

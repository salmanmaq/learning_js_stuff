const { readFileSync, writeFileSync } = require('fs');

console.log('Start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// Overwrite
writeFileSync(
    './content/result-text.txt',
    `Here is the result: ${first}, ${second}`
);

// Append
writeFileSync(
    './content/result-text.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);

console.log('Done with task');
console.log('Starting next task');
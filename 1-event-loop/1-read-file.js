const { readFile } = require('fs');
const path = require('path');

filePath = path.resolve(__dirname, '..', 'content', 'first.txt');

console.log('Start');
readFile(filePath, 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(result);
    console.log('Completed first task');
});
console.log('Starting next task');
const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const firstFilePath = path.resolve(__dirname, '..', 'content', 'first.txt');
const secondFilePath = path.resolve(__dirname, '..', 'content', 'second.txt');
const writeFilePath = path.resolve(__dirname, '..', 'content', 'result-async-await.txt');

const start = async() => {
    try {
        const first = await readFile(firstFilePath, 'utf-8');
        const second = await readFile(secondFilePath, 'utf-8');
        await writeFile(
            writeFilePath, 
            `Wow cool stuff: ${first} ${second}`
        );
        console.log(first, second);
    }
    catch (error) {
        console.log(error);
    };  
};

start();
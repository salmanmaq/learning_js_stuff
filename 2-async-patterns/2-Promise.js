const { readFile } = require('fs');
const { result } = require('lodash');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'content', 'first.txt');

const getText = (filePath) => {
    return new Promise( (resolve, reject) => {
        readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            };
        });
    });
};

getText(filePath)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
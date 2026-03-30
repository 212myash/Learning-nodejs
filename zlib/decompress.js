const zlib = require('zlib');
const fs = require('fs');

const input = fs.createReadStream('input.txt.gz');
const output = fs.createWriteStream('output.txt');

input.pipe(zlib.createGunzip()).pipe(output);

console.log("File decompressed successfully");
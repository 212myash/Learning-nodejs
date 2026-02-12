const fs = require('fs');

const stream = fs.createReadStream('big.txt','utf-8');

stream.on('data', (chunk) => {
    console.log("Chunk received:");
    console.log(chunk);
});

stream.on('end', () => {
    console.log("File reading completed");
});

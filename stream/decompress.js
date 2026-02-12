const zlib = require('zlib');
const fs = require('fs');

const compressedData = fs.readFileSync('Sample.txt.gz');

zlib.gunzip(compressedData, (err, decompressedData) => {
    if (err) {
        console.error('Error decompressing file', err);
        return;
    }
    fs.writeFileSync('decompressed.txt', decompressedData);
    console.log('File decompressed successfully');
});

const zlib = require('zlib');
const fs = require('fs');

const fileContent = fs.readFileSync('Sample.txt','utf-8');

zlib.gzip(fileContent,(err,compressData)=>{
    if(err){
        console.error('Error compressing file',err);
        return;
    }
    fs.writeFileSync('Sample.txt.gz',compressData);
    console.log('File compressed successfully');
});

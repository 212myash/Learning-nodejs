const fs = require('fs');

console.log("Program Started");
fs.readFile("Example.txt", function(err, data){
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
    console.log("Program Ended");
});

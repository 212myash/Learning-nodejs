const fs = require('fs');
const data = 
{
    name: "Yash",
    age: 20,
    city: "Patna",
};

const jsonString = JSON.stringify(data, null, 2);
fs.writeFile('data.json', jsonString, (err)=>{
    if(err)
        { 
            console.error('error while writing file', err);
            return;
        }
    console.log("Data written to file");
});
const fs = require('fs');
fs.readFile('data.json', 'utf-8', (err, data)=>{
    if(err)
        { 
            console.error('error while reading file', err);
            return;
        }
        try 
        {
            const obj = JSON.parse(data);
            console.log('Parsed Object: ', obj)

            console.log('Name: ', obj.name);
            console.log('Age: ', obj.age);
            console.log('City: ', obj.city);
            console.log('Job: ', obj.job);
        }
        catch(parseErr)
        {
            console.error('Error while parsing JSON', parseErr);
        }
});
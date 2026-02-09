let fs = require('fs');
let file = "Example.txt";

function ReadFile(err, data)
{
    if (err) throw err;
    console.log(data);
}

function status(err, stats)
{
    if (err) throw err;
    if (stats.isFile())
    {
        fs.readFile(file, "utf-8", ReadFile);
    }
}

function fileExists(exists)
{
    if (exists)
    {
        fs.stat(file, status);
    }
}

fs.exists(file, fileExists);

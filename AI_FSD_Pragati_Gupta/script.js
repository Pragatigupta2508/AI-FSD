// const fs=require('fs');

// fs.writeFile('example.txt','This is an example text file.',
//     function(err){
//     if(err) console.error(err);
//     else console.log('File created successfully.');
// });
// fs.appendFile('example.txt','\nHow are you doing?.',
//     function(err){
//     if(err) console.error(err);
//     else console.log('File appended successfully.');
// });
// fs.rename('example.txt','myfile.txt',
//     function(err){
//     if(err) console.error(err);
//     else console.log('File renamed successfully.');
// });
// fs.copyFile('myfile.txt','copy_of_myfile.txt',
//     function(err){
//     if(err) console.error(err);
//     else console.log('File copied successfully.');
// });
// fs.unlink('copy_of_myfile.txt',
//     function(err){
//     if(err) console.error(err);
//     else console.log('File deleted successfully.');
// });

//const http = require('http');

// const http = require('http');

// const server = http.createServer(function (req, res) {

//     if (req.url === '/') {
//         res.end('Welcome to the Home Page!');
//     } 
//     else if (req.url === '/about') {
//         res.end('This is the About Page.');
//     } 
//     else {
//         res.end('404 Page Not Found.');
//     }

// });

// server.listen(3000, function () {
//     console.log('Server is running on port 3000')
// })




const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Welcome to the Home Page!');
});
app.listen(3000);
console.log('Server is running on port 3000');

app.get('/aboutme', function (req, res) {
    res.send('This is the About Page.');
});
app.get('/portfolio/', function (req, res) {
    res.send('This is the Portfolio Page.');
});

// app.use(function (req, res) {
//     res.status(404).send('404 Page Not Found.');
// });

app.use(function (req, res) {
    console.log('middleware called');
    res.status(404).send('404 Page Not Found.');
    
});
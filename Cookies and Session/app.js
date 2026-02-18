const express = require('express');
const app = express();
//const port = 3000;

const cookieparser = require('cookie-parser');

const bcrypt = require('bcrypt');

app.get("/",function(req,res){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("P4&&w0RD", salt, function(err, hash) {
        console.log(hash)
        //res.send(hash);
    });
});
});

bcrypt.compare("P4&&w0RD", "$2b$10$YlI1Lbth8YsBBfyi3WODBujimAVqkx5ATyzdnCNOBe8btk8PY/J2O", function(err, result) {
    console.log(result); // true or false
    //res.send(result);
});


// app.use(cookieparser());

// app.get("/",function(req,res){
//     res.cookie("myname","pragati");
//     res.send("cookie set");
// });

// app.get('/read',function(req,res){
//     console.log(req.cookies);
//     res.send('read cookies ');
// });

app.listen(5000);

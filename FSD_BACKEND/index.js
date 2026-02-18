const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public'), { index: false }));


// EJS
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// Route
app.get('/', function (req, res) {
    res.render('index', { name: "Pragati" });
});

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});


app.post('/submit', function(req, res){
    const user = req.body.username;
    res.send(`Hello ${user}, backend received your data 😌`);
});
